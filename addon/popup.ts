/// <reference types="chrome" />

import { BackgroundMessage } from '../lib/messages';
import { Config } from '../lib/types';
import type { RuleIndexEntry, RuleIndexSection } from '../rules/rule-index-builder';
import { storageGet, storageRemove, storageSet } from './mv-compat';
import { initConfig, isEnabledForDomain, setIsEnabledForDomain, showOptOutStatus } from './utils';

type RuleSection = RuleIndexSection;

type RuleSectionControls = {
    details: HTMLDetailsElement;
    count: HTMLSpanElement;
    search: HTMLInputElement;
    enableAll: HTMLButtonElement;
    disableAll: HTMLButtonElement;
    status: HTMLDivElement;
    list: HTMLDivElement;
};

const maxRenderedRules = 100;

async function init() {
    const autoconsentConfig: Config = await storageGet('config');
    const enabledCheckbox = document.querySelector('input#enabled') as HTMLInputElement;
    const currentSite = document.querySelector('span#current-site') as HTMLSpanElement;
    const optOutRadio = document.querySelector('input#optout') as HTMLInputElement;
    const optInRadio = document.querySelector('input#optin') as HTMLInputElement;
    const promptRadio = document.querySelector('input#prompt') as HTMLInputElement;
    const prehideOnRadio = document.querySelector('input#prehide-on') as HTMLInputElement;
    const prehideOffRadio = document.querySelector('input#prehide-off') as HTMLInputElement;
    const cosmeticOnRadio = document.querySelector('input#cosmetic-on') as HTMLInputElement;
    const cosmeticOffRadio = document.querySelector('input#cosmetic-off') as HTMLInputElement;
    const generatedOnRadio = document.querySelector('input#generated-on') as HTMLInputElement;
    const generatedOffRadio = document.querySelector('input#generated-off') as HTMLInputElement;
    const heuristicActionCheckbox = document.querySelector('input#heuristic-action') as HTMLInputElement;
    const visualTestOnRadio = document.querySelector('input#visual-test-on') as HTMLInputElement;
    const visualTestOffRadio = document.querySelector('input#visual-test-off') as HTMLInputElement;
    const popupMutationOnRadio = document.querySelector('input#popup-mutation-on') as HTMLInputElement;
    const popupMutationOffRadio = document.querySelector('input#popup-mutation-off') as HTMLInputElement;
    const retriesInput = document.querySelector('input#retries') as HTMLInputElement;
    const logsLifecycleCheckbox = document.querySelector('input#logs-lifecycle') as HTMLInputElement;
    const logsRulestepsCheckbox = document.querySelector('input#logs-rulesteps') as HTMLInputElement;
    const logsDetectionstepsCheckbox = document.querySelector('input#logs-detectionsteps') as HTMLInputElement;
    const logsWaitsCheckbox = document.querySelector('input#logs-waits') as HTMLInputElement;
    const logsEvalsCheckbox = document.querySelector('input#logs-evals') as HTMLInputElement;
    const logsErrorsCheckbox = document.querySelector('input#logs-errors') as HTMLInputElement;
    const logsMessagesCheckbox = document.querySelector('input#logs-messages') as HTMLInputElement;
    const ruleReloadButton = document.querySelector('#reload') as HTMLButtonElement;
    const resetButton = document.querySelector('#reset') as HTMLButtonElement;
    const ruleSectionControls: Record<RuleSection, RuleSectionControls> = {
        generated: {
            details: document.querySelector('#generated-rules-section') as HTMLDetailsElement,
            count: document.querySelector('#generated-rules-count') as HTMLSpanElement,
            search: document.querySelector('#generated-rules-search') as HTMLInputElement,
            enableAll: document.querySelector('#generated-rules-enable-all') as HTMLButtonElement,
            disableAll: document.querySelector('#generated-rules-disable-all') as HTMLButtonElement,
            status: document.querySelector('#generated-rules-status') as HTMLDivElement,
            list: document.querySelector('#generated-rules-list') as HTMLDivElement,
        },
        generic: {
            details: document.querySelector('#generic-rules-section') as HTMLDetailsElement,
            count: document.querySelector('#generic-rules-count') as HTMLSpanElement,
            search: document.querySelector('#generic-rules-search') as HTMLInputElement,
            enableAll: document.querySelector('#generic-rules-enable-all') as HTMLButtonElement,
            disableAll: document.querySelector('#generic-rules-disable-all') as HTMLButtonElement,
            status: document.querySelector('#generic-rules-status') as HTMLDivElement,
            list: document.querySelector('#generic-rules-list') as HTMLDivElement,
        },
        code: {
            details: document.querySelector('#code-rules-section') as HTMLDetailsElement,
            count: document.querySelector('#code-rules-count') as HTMLSpanElement,
            search: document.querySelector('#code-rules-search') as HTMLInputElement,
            enableAll: document.querySelector('#code-rules-enable-all') as HTMLButtonElement,
            disableAll: document.querySelector('#code-rules-disable-all') as HTMLButtonElement,
            status: document.querySelector('#code-rules-status') as HTMLDivElement,
            list: document.querySelector('#code-rules-list') as HTMLDivElement,
        },
        consentomatic: {
            details: document.querySelector('#consentomatic-rules-section') as HTMLDetailsElement,
            count: document.querySelector('#consentomatic-rules-count') as HTMLSpanElement,
            search: document.querySelector('#consentomatic-rules-search') as HTMLInputElement,
            enableAll: document.querySelector('#consentomatic-rules-enable-all') as HTMLButtonElement,
            disableAll: document.querySelector('#consentomatic-rules-disable-all') as HTMLButtonElement,
            status: document.querySelector('#consentomatic-rules-status') as HTMLDivElement,
            list: document.querySelector('#consentomatic-rules-list') as HTMLDivElement,
        },
    };
    let ruleIndexPromise: Promise<RuleIndexEntry[]> | null = null;
    let ruleIndex: RuleIndexEntry[] | null = null;

    autoconsentConfig.disabledCmps = autoconsentConfig.disabledCmps || [];

    // enable proceed button when necessary

    const [currentTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (!currentTab.url || !currentTab.id) {
        console.error('Current tab is not valid');
        return;
    }
    const currentDomain = new URL(currentTab.url).hostname;
    currentSite.textContent = currentDomain;
    const tabId = currentTab.id;
    const detectedKey = `detected${tabId}`;
    console.log('detectedKey', detectedKey);
    const frameId = await storageGet(detectedKey);
    console.log('frameId', frameId, typeof frameId);
    if (typeof frameId === 'number') {
        const proceedButton = document.createElement('button');
        proceedButton.innerText = 'Manage popup';
        proceedButton.id = 'proceed';
        proceedButton.addEventListener('click', () => {
            storageRemove(detectedKey);
            showOptOutStatus(tabId, 'working');
            chrome.tabs.sendMessage(
                tabId,
                {
                    type: 'optOut',
                } as BackgroundMessage,
                {
                    frameId,
                },
            );
            proceedButton.remove();
            window.close();
        });
        document.body.prepend(proceedButton);
    }

    // set form initial values
    const enabledForCurrentDomain = await isEnabledForDomain(currentDomain);
    enabledCheckbox.checked = autoconsentConfig.enabled && enabledForCurrentDomain;
    logsLifecycleCheckbox.checked = autoconsentConfig.logs.lifecycle;
    logsRulestepsCheckbox.checked = autoconsentConfig.logs.rulesteps;
    logsDetectionstepsCheckbox.checked = autoconsentConfig.logs.detectionsteps;
    logsWaitsCheckbox.checked = autoconsentConfig.logs.waits;
    logsEvalsCheckbox.checked = autoconsentConfig.logs.evals;
    logsErrorsCheckbox.checked = autoconsentConfig.logs.errors;
    logsMessagesCheckbox.checked = autoconsentConfig.logs.messages;
    retriesInput.value = autoconsentConfig.detectRetries.toString();
    if (autoconsentConfig.autoAction === 'optIn') {
        optInRadio.checked = true;
    } else if (autoconsentConfig.autoAction === 'optOut') {
        optOutRadio.checked = true;
    } else {
        promptRadio.checked = true;
    }

    if (autoconsentConfig.enablePrehide) {
        prehideOnRadio.checked = true;
    } else {
        prehideOffRadio.checked = true;
    }

    if (autoconsentConfig.enableCosmeticRules) {
        cosmeticOnRadio.checked = true;
    } else {
        cosmeticOffRadio.checked = true;
    }

    if (autoconsentConfig.enableGeneratedRules) {
        generatedOnRadio.checked = true;
    } else {
        generatedOffRadio.checked = true;
    }

    heuristicActionCheckbox.checked = autoconsentConfig.enableHeuristicAction;

    if (autoconsentConfig.visualTest) {
        visualTestOnRadio.checked = true;
    } else {
        visualTestOffRadio.checked = true;
    }

    if (autoconsentConfig.enablePopupMutationObserver) {
        popupMutationOnRadio.checked = true;
    } else {
        popupMutationOffRadio.checked = true;
    }

    // set form event listeners

    enabledCheckbox.addEventListener('change', async () => {
        await setIsEnabledForDomain(currentDomain, enabledCheckbox.checked);
    });

    retriesInput.addEventListener('change', () => {
        autoconsentConfig.detectRetries = parseInt(retriesInput.value, 10);
        storageSet({ config: autoconsentConfig });
    });

    function modeChange() {
        if (optInRadio.checked) {
            autoconsentConfig.autoAction = 'optIn';
        } else if (optOutRadio.checked) {
            autoconsentConfig.autoAction = 'optOut';
        } else {
            autoconsentConfig.autoAction = null;
        }
        storageSet({ config: autoconsentConfig });
    }
    optInRadio.addEventListener('change', modeChange);
    optOutRadio.addEventListener('change', modeChange);
    promptRadio.addEventListener('change', modeChange);

    function prehideChange() {
        autoconsentConfig.enablePrehide = prehideOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    prehideOnRadio.addEventListener('change', prehideChange);
    prehideOffRadio.addEventListener('change', prehideChange);

    function cosmeticChange() {
        autoconsentConfig.enableCosmeticRules = cosmeticOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    cosmeticOnRadio.addEventListener('change', cosmeticChange);
    cosmeticOffRadio.addEventListener('change', cosmeticChange);

    function generatedChange() {
        autoconsentConfig.enableGeneratedRules = generatedOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    generatedOnRadio.addEventListener('change', generatedChange);
    generatedOffRadio.addEventListener('change', generatedChange);

    function heuristicActionChange() {
        autoconsentConfig.enableHeuristicAction = heuristicActionCheckbox.checked;
        storageSet({ config: autoconsentConfig });
    }
    heuristicActionCheckbox.addEventListener('change', heuristicActionChange);

    function visualTestChange() {
        autoconsentConfig.visualTest = visualTestOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    visualTestOnRadio.addEventListener('change', visualTestChange);
    visualTestOffRadio.addEventListener('change', visualTestChange);

    function popupMutationChange() {
        autoconsentConfig.enablePopupMutationObserver = popupMutationOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    popupMutationOnRadio.addEventListener('change', popupMutationChange);
    popupMutationOffRadio.addEventListener('change', popupMutationChange);

    function updateLogsConfig() {
        autoconsentConfig.logs = {
            lifecycle: logsLifecycleCheckbox.checked,
            rulesteps: logsRulestepsCheckbox.checked,
            detectionsteps: logsDetectionstepsCheckbox.checked,
            evals: logsEvalsCheckbox.checked,
            errors: logsErrorsCheckbox.checked,
            messages: logsMessagesCheckbox.checked,
            waits: logsWaitsCheckbox.checked,
        };
        storageSet({ config: autoconsentConfig });
    }

    logsLifecycleCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsRulestepsCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsDetectionstepsCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsWaitsCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsEvalsCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsErrorsCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });
    logsMessagesCheckbox.addEventListener('change', () => {
        updateLogsConfig();
    });

    async function loadRuleIndex() {
        if (!ruleIndexPromise) {
            ruleIndexPromise = fetch('./rule-index.json').then(async (res) => (await res.json()) as RuleIndexEntry[]);
        }
        ruleIndex = await ruleIndexPromise;
        updateRuleCounts();
        return ruleIndex;
    }

    function updateRuleCounts() {
        if (!ruleIndex) {
            return;
        }
        const disabledCmps = autoconsentConfig.disabledCmps || [];
        (Object.keys(ruleSectionControls) as RuleSection[]).forEach((section) => {
            const sectionRules = ruleIndex?.filter((rule) => rule.section === section) || [];
            const disabledInSection = sectionRules.filter((rule) => disabledCmps.includes(rule.name)).length;
            const count = ruleSectionControls[section].count;
            count.textContent = `(${disabledInSection}/${sectionRules.length} disabled)`;
            count.classList.toggle('rule-count-disabled', disabledInSection > 0);
        });
    }

    function setRuleEnabled(ruleName: string, enabled: boolean) {
        const disabledCmps = new Set(autoconsentConfig.disabledCmps || []);
        if (enabled) {
            disabledCmps.delete(ruleName);
        } else {
            disabledCmps.add(ruleName);
        }
        autoconsentConfig.disabledCmps = Array.from(disabledCmps).sort();
        storageSet({ config: autoconsentConfig });
        updateRuleCounts();
    }

    function renderOpenRuleSections() {
        (Object.keys(ruleSectionControls) as RuleSection[]).forEach((section) => {
            if (ruleSectionControls[section].details.open) {
                renderRuleSection(section);
            }
        });
    }

    function setRuleSectionEnabled(section: RuleSection, enabled: boolean) {
        if (!ruleIndex) {
            return;
        }

        const disabledCmps = new Set(autoconsentConfig.disabledCmps || []);
        ruleIndex
            .filter((rule) => rule.section === section)
            .forEach((rule) => {
                if (enabled) {
                    disabledCmps.delete(rule.name);
                } else {
                    disabledCmps.add(rule.name);
                }
            });
        autoconsentConfig.disabledCmps = Array.from(disabledCmps).sort();
        storageSet({ config: autoconsentConfig });
        updateRuleCounts();
        renderOpenRuleSections();
    }

    function renderRuleSection(section: RuleSection) {
        const controls = ruleSectionControls[section];
        if (!ruleIndex) {
            controls.status.textContent = 'Rules are not loaded yet.';
            return;
        }

        const disabledCmps = autoconsentConfig.disabledCmps || [];
        const searchQuery = controls.search.value.trim().toLowerCase();
        const sectionRules = ruleIndex.filter((rule) => rule.section === section);
        const matchingRules = sectionRules.filter((rule) => {
            if (!searchQuery) {
                return disabledCmps.includes(rule.name);
            }
            return rule.name.toLowerCase().includes(searchQuery) || !!rule.urlPattern?.toLowerCase().includes(searchQuery);
        });
        const renderedRules = matchingRules.slice(0, maxRenderedRules);
        const disabledInSection = sectionRules.filter((rule) => disabledCmps.includes(rule.name)).length;
        controls.status.textContent = searchQuery
            ? `Showing ${renderedRules.length} of ${matchingRules.length} matches. ${disabledInSection} disabled.`
            : `Showing ${renderedRules.length} of ${disabledInSection} disabled rules. Search to find enabled rules.`;
        controls.list.replaceChildren(
            ...renderedRules.map((rule) => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = !disabledCmps.includes(rule.name);
                checkbox.addEventListener('change', () => {
                    setRuleEnabled(rule.name, checkbox.checked);
                    renderRuleSection(section);
                });

                const label = document.createElement('label');
                label.className = 'rule-row';
                label.title = rule.urlPattern ? `${rule.name}\n${rule.urlPattern}` : rule.name;
                label.append(checkbox, document.createTextNode(` ${rule.name}${rule.cosmetic ? ' (cosmetic)' : ''}`));
                return label;
            }),
        );
    }

    async function loadAndRenderRuleSection(section: RuleSection) {
        ruleSectionControls[section].status.textContent = 'Loading rules...';
        try {
            await loadRuleIndex();
            renderRuleSection(section);
        } catch (e) {
            console.error('Failed to load rule index', e);
            ruleSectionControls[section].status.textContent = 'Failed to load rules.';
        }
    }

    (Object.keys(ruleSectionControls) as RuleSection[]).forEach((section) => {
        const controls = ruleSectionControls[section];
        controls.details.addEventListener('toggle', () => {
            if (controls.details.open) {
                loadAndRenderRuleSection(section);
            }
        });
        controls.search.addEventListener('input', () => renderRuleSection(section));
        controls.enableAll.addEventListener('click', async () => {
            await loadRuleIndex();
            setRuleSectionEnabled(section, true);
        });
        controls.disableAll.addEventListener('click', async () => {
            await loadRuleIndex();
            setRuleSectionEnabled(section, false);
        });
    });

    loadRuleIndex().catch((e) => {
        console.error('Failed to load rule index', e);
    });

    ruleReloadButton.addEventListener('click', async () => {
        const [compactRulesRes, fullRulesRes] = await Promise.all([fetch('./compact-rules.json'), fetch('./rules.json')]);
        const fullRules = (await fullRulesRes.json()) as { autoconsent: unknown };
        await storageSet({
            rules: await compactRulesRes.json(),
            fullRules: fullRules.autoconsent,
        });
        ruleIndexPromise = null;
        ruleIndex = null;
        (Object.keys(ruleSectionControls) as RuleSection[]).forEach((section) => {
            if (ruleSectionControls[section].details.open) {
                loadAndRenderRuleSection(section);
            }
        });
    });

    resetButton.addEventListener('click', async () => {
        await storageRemove('config');
        await initConfig();
        window.close();
    });
}

init();
