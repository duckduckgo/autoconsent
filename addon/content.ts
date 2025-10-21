import { BackgroundMessage } from '../lib/messages';
import AutoConsent from '../lib/web';

const consent = new AutoConsent(async (msg) => {
    await chrome.runtime.sendMessage(msg);
});
chrome.runtime.onMessage.addListener((message: BackgroundMessage) => {
    return Promise.resolve(consent.receiveMessageCallback(message));
});

chrome.runtime.connect({ name: `instance-${consent.id}` });
