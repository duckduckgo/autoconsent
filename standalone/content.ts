import AutoConsent from '../lib/web';
import { filterCompactRules, type IndexedCMPRuleset } from '../lib/encoding';
import { BackgroundMessage, ContentScriptMessage } from '../lib/messages';
import { Config, RuleBundle } from '../lib/types';
import compactRules from '../rules/compact-rules.json';

declare global {
    interface Window {
        autoconsentReceiveMessage: (message: BackgroundMessage) => Promise<void>;
        autoconsentStandalone?: {
            instance: AutoConsent;
            messages: ContentScriptMessage[];
        };
    }
}

function isMainFrame() {
    return window.top === window;
}

function buildRules(): RuleBundle {
    return {
        autoconsent: [],
        compact: filterCompactRules(compactRules as IndexedCMPRuleset, {
            url: window.location.href,
            mainFrame: isMainFrame(),
        }),
    };
}

function logMessage(message: ContentScriptMessage) {
    switch (message.type) {
        case 'cmpDetected':
            console.log(`autoconsent detected CMP: ${message.cmp}`);
            break;
        case 'popupFound':
            console.log(`autoconsent found popup: ${message.cmp}`);
            break;
        case 'optOutResult':
            console.log(`autoconsent opt-out result: ${message.cmp}`, message.result);
            break;
        case 'autoconsentDone':
            console.log(`autoconsent done: ${message.cmp}`, {
                duration: message.duration,
                totalClicks: message.totalClicks,
            });
            break;
        case 'autoconsentError':
            console.warn('autoconsent error', message.details);
            break;
    }
}

if (!window.autoconsentReceiveMessage) {
    const config: Partial<Config> = {
        isMainWorld: true,
        enableHeuristicDetection: true,
        heuristicMode: 'tier2',
        enablePopupMutationObserver: false,
        logs: {
            lifecycle: true,
            rulesteps: true,
            detectionsteps: false,
            evals: false,
            errors: true,
            messages: false,
            waits: true,
        },
    };
    const rules = buildRules();
    const messages: ContentScriptMessage[] = [];
    const consentRef: { current?: AutoConsent } = {};

    window.autoconsentReceiveMessage = async (message: BackgroundMessage) => {
        if (!consentRef.current) {
            throw new Error('autoconsent is not initialized yet');
        }
        await consentRef.current.receiveMessageCallback(message);
    };

    const sendMessage = async (message: ContentScriptMessage) => {
        messages.push(message);
        logMessage(message);
    };

    const consent = new AutoConsent(sendMessage);
    consentRef.current = consent;
    window.autoconsentStandalone = {
        instance: consent,
        messages,
    };
    consent.initialize(config, rules);

    console.log('autoconsent standalone initialized', {
        instanceId: consent.id,
        rules: rules.compact?.r.length ?? 0,
        url: window.location.href,
    });
} else {
    console.warn('autoconsent already initialized', window.autoconsentReceiveMessage);
}
