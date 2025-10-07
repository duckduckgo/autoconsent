import { snippets } from '../lib/eval-snippets';
import { BackgroundMessage, ContentScriptMessage, DevtoolsMessage, ReportMessage } from '../lib/messages';
import { Config, RuleBundle } from '../lib/types';
import { manifestVersion, storageGet, storageRemove, storageSet } from './mv-compat';
import { initConfig, isEnabledForDomain, showOptOutStatus } from './utils';
import { consentomatic } from '../rules/consentomatic.json';
import { filterCompactRules } from '../lib/encoding';

/**
 * Mapping of tabIds to Port connections to open devtools panels.
 * This is kept in memory, as the values are only relevant while the background service worker is
 * alive. Once the service worker stops, Ports to devtools will be severed, and the panel will
 * reestablish the connection.
 */
const openDevToolsPanels = new Map<number, chrome.runtime.Port>();

async function loadRules() {
    const res = await fetch('./compact-rules.json');
    storageSet({
        rules: await res.json(),
    });
}

async function evalInTab(
    tabId: number,
    frameId: number,
    code: string,
    snippetId?: keyof typeof snippets,
): Promise<chrome.scripting.InjectionResult<boolean>[]> {
    if (manifestVersion === 2) {
        return new Promise((resolve) => {
            chrome.tabs.executeScript(
                tabId,
                {
                    frameId,
                    code: `!!window.eval(decodeURIComponent("${encodeURIComponent(code)}"))`,
                },
                (resultArr) => {
                    resolve([
                        {
                            result: resultArr[0],
                            frameId,
                            documentId: '',
                        },
                    ]);
                },
            );
        });
    }
    return chrome.scripting.executeScript({
        target: {
            tabId,
            frameIds: [frameId],
        },
        world: 'MAIN',
        func: snippets[snippetId],
    });
}

async function getTabReports(tabId: number): Promise<{ [frameId: number]: ReportMessage }> {
    const storageKey = `reports-${tabId}`;
    return (await chrome.storage.session.get(storageKey))[storageKey] || {};
}

async function updateTabReports(tabId: number, frameId: number, msg: ReportMessage) {
    const reportsForTab = await getTabReports(tabId);
    reportsForTab[frameId] = msg;
    await chrome.storage.session.set({ [`reports-${tabId}`]: reportsForTab });
}

chrome.runtime.onInstalled.addListener(() => {
    loadRules();
    initConfig();
});
if (manifestVersion === 2) {
    // always load rules on startup in MV2
    loadRules();
    initConfig();
}

chrome.tabs.onRemoved.addListener((tabId: number) => {
    storageRemove(`detected${tabId}`);
});

chrome.runtime.onMessage.addListener(async (msg: ContentScriptMessage, sender: any) => {
    const tabId = sender.tab.id;
    const frameId = sender.frameId;
    const senderUrl = sender.url || `${sender.origin}/`;
    const senderDomain = new URL(senderUrl).hostname;
    const autoconsentConfig: Config = await storageGet('config');
    const logsConfig = autoconsentConfig.logs;
    if (logsConfig.lifecycle) {
        console.log('got config', autoconsentConfig);
        console.groupCollapsed(`${msg.type} from ${senderUrl}`);
        console.log(msg, sender);
        console.groupEnd();
    }

    switch (msg.type) {
        case 'init': {
            if (frameId === 0) {
                await showOptOutStatus(tabId, 'idle');
            }
            const rules: RuleBundle = {
                autoconsent: [],
                consentomatic,
                compact: filterCompactRules(await storageGet('rules'), { url: senderUrl, mainFrame: frameId === 0 }),
            };
            console.log('filtered rules:', rules.compact, JSON.stringify(rules.compact).length);
            chrome.tabs.sendMessage(
                tabId,
                {
                    type: 'initResp',
                    rules,
                    config: { ...autoconsentConfig, enabled: await isEnabledForDomain(senderDomain) },
                } as BackgroundMessage,
                {
                    frameId,
                },
            );
            break;
        }
        case 'eval':
            evalInTab(tabId, frameId, msg.code, msg.snippetId).then(([result]) => {
                if (logsConfig.evals) {
                    console.groupCollapsed(`eval result for ${senderUrl}`);
                    console.log(msg.code, result.result);
                    console.groupEnd();
                }
                chrome.tabs.sendMessage(
                    tabId,
                    {
                        id: msg.id,
                        type: 'evalResp',
                        result: result.result,
                    } as BackgroundMessage,
                    {
                        frameId,
                    },
                );
            });
            break;
        case 'popupFound':
            await showOptOutStatus(tabId, 'available', msg.cmp);
            if (msg.cmp !== 'filterList') {
                storageSet({
                    [`detected${tabId}`]: frameId,
                });
            }
            break;
        case 'optOutResult':
        case 'optInResult':
            if (msg.result) {
                // make sure we set the flag first, so that it's set by the time we handle autoconsentDone
                if (msg.scheduleSelfTest) {
                    await storageSet({
                        [`selfTest${tabId}`]: frameId,
                    });
                }
            }
            break;
        case 'selfTestResult':
            logsConfig.lifecycle && console.log(`Self-test result ${msg.result}`);
            if (msg.result) {
                await showOptOutStatus(tabId, 'verified', msg.cmp);
            }
            break;
        case 'autoconsentDone': {
            await showOptOutStatus(tabId, 'success', msg.cmp);
            // sometimes self-test needs to be done in another frame
            const selfTestKey = `selfTest${tabId}`;
            const selfTestFrameId = await storageGet(selfTestKey);

            if (typeof selfTestFrameId === 'number') {
                logsConfig.lifecycle && console.log(`Requesting self-test in ${selfTestFrameId}`);
                storageRemove(selfTestKey);
                chrome.tabs.sendMessage(
                    tabId,
                    {
                        type: 'selfTest',
                    },
                    {
                        frameId: selfTestFrameId,
                    },
                );
            } else {
                logsConfig.lifecycle && console.log(`No self-test scheduled`);
            }
            break;
        }
        case 'autoconsentError':
            console.error('Error:', msg.details);
            break;
        case 'report':
            if (sender.tab && openDevToolsPanels.has(sender.tab.id)) {
                openDevToolsPanels.get(sender.tab.id).postMessage({
                    tabId: sender.tab.id,
                    frameId: sender.frameId,
                    ...msg,
                });
            }
            updateTabReports(sender.tab.id, sender.frameId, msg);
            break;
        case 'visualDelay':
            console.log('visualDelay', msg);
            break;
    }
});

if (manifestVersion === 2) {
    // MV3 handles this inside the popup
    chrome.pageAction.onClicked.addListener(async (tab) => {
        const tabId = tab.id;
        const detectedKey = `detected${tabId}`;
        const frameId = await storageGet(detectedKey);
        if (typeof frameId === 'number') {
            storageRemove(detectedKey);
            await showOptOutStatus(tabId, 'working');
            chrome.tabs.sendMessage(
                tabId,
                {
                    type: 'optOut',
                } as BackgroundMessage,
                {
                    frameId,
                },
            );
        }
    });
}

// Communicate with devtools panels
chrome.runtime.onConnect.addListener(function (devToolsConnection) {
    if (devToolsConnection.name.startsWith('instance-')) {
        // connection from an autoconsent instance - used to detect frame destruction
        const tabId = devToolsConnection.sender?.tab?.id;
        const instanceId = devToolsConnection.name.slice('instance-'.length);
        if (tabId && instanceId) {
            devToolsConnection.onDisconnect.addListener(() => {
                if (openDevToolsPanels.has(tabId)) {
                    openDevToolsPanels.get(tabId).postMessage({
                        type: 'instanceTerminated',
                        tabId,
                        instanceId,
                    });
                }
                // remove stored frame data
                updateTabReports(tabId, devToolsConnection.sender.frameId, undefined);
            });
        }
    } else if (devToolsConnection.name === 'devtools-panel') {
        let tabId = -1;
        // add the listener
        devToolsConnection.onMessage.addListener(async (message: DevtoolsMessage) => {
            tabId = message.tabId;

            if (message.type === 'init') {
                // save the message channel for this tab
                openDevToolsPanels.set(tabId, devToolsConnection);

                // dump data cached in bg to the panel
                const reportsForTab = await getTabReports(tabId);
                Object.keys(reportsForTab || {}).forEach((frameId) => {
                    devToolsConnection.postMessage({
                        tabId,
                        frameId,
                        ...reportsForTab[parseInt(frameId, 10)],
                    });
                });
            }
        });

        devToolsConnection.onDisconnect.addListener(function () {
            openDevToolsPanels.delete(tabId);
        });
    }
});

chrome.tabs.onRemoved.addListener((tabId) => {
    chrome.storage.session.remove(`reports-${tabId}`);
});
