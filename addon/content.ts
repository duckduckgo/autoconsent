import { BackgroundMessage } from '../lib/messages';
import AutoConsent from '../lib/web-extra';

const consent = new AutoConsent(chrome.runtime.sendMessage);
chrome.runtime.onMessage.addListener((message: BackgroundMessage) => {
    return Promise.resolve(consent.receiveMessageCallback(message));
});

chrome.runtime.connect({ name: `instance-${consent.id}` });
