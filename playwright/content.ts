import AutoConsent from '../lib/web';
import { BackgroundMessage } from '../lib/messages';
import { MessageSender, RuleBundle } from '../lib/types';
import { getButtonData, getPotentialPopups } from '../lib/heuristics';

declare global {
    interface Window {
        autoconsentSendMessage: MessageSender;
        autoconsentReceiveMessage: (message: BackgroundMessage) => Promise<void>;
        autoconsentHeuristics: { getPotentialPopups: typeof getPotentialPopups; getButtonData: typeof getButtonData };
    }
}

// lets other scripts in the same world (e.g. crawler scrapers) reuse popup and button discovery
window.autoconsentHeuristics = { getPotentialPopups, getButtonData };

if (!window.autoconsentReceiveMessage) {
    const consent = new AutoConsent(window.autoconsentSendMessage, null, <RuleBundle>{ autoconsent: [] });

    window.autoconsentReceiveMessage = (message: BackgroundMessage) => {
        return Promise.resolve(consent.receiveMessageCallback(message));
    };
} else {
    console.warn('autoconsent already initialized', window.autoconsentReceiveMessage);
}
