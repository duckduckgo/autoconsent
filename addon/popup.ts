import { BackgroundMessage } from '../lib/messages';
import { Config } from '../lib/types';
import { storageGet, storageRemove, storageSet } from './mv-compat';
import { initConfig, isEnabledForDomain, setIsEnabledForDomain, showOptOutStatus } from './utils';

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
    const heuristicActionOnRadio = document.querySelector('input#heuristic-action-on') as HTMLInputElement;
    const heuristicActionOffRadio = document.querySelector('input#heuristic-action-off') as HTMLInputElement;
    const visualTestOnRadio = document.querySelector('input#visual-test-on') as HTMLInputElement;
    const visualTestOffRadio = document.querySelector('input#visual-test-off') as HTMLInputElement;
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

    if (autoconsentConfig.enableHeuristicAction) {
        heuristicActionOnRadio.checked = true;
    } else {
        heuristicActionOffRadio.checked = true;
    }

    if (autoconsentConfig.visualTest) {
        visualTestOnRadio.checked = true;
    } else {
        visualTestOffRadio.checked = true;
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
        autoconsentConfig.enableHeuristicAction = heuristicActionOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    heuristicActionOnRadio.addEventListener('change', heuristicActionChange);
    heuristicActionOffRadio.addEventListener('change', heuristicActionChange);

    function visualTestChange() {
        autoconsentConfig.visualTest = visualTestOnRadio.checked;
        storageSet({ config: autoconsentConfig });
    }
    visualTestOnRadio.addEventListener('change', visualTestChange);
    visualTestOffRadio.addEventListener('change', visualTestChange);

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

    ruleReloadButton.addEventListener('click', async () => {
        const res = await fetch('./rules.json');
        storageSet({
            rules: await res.json(),
        });
    });

    resetButton.addEventListener('click', async () => {
        await storageRemove('config');
        await initConfig();
        window.close();
    });
}

init();
