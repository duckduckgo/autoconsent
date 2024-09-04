import { BackgroundMessage } from "../lib/messages";
import AutoConsent from "../lib/web";
import sendContentMessage from "./send-content-message";

const consent = new AutoConsent(sendContentMessage);
chrome.runtime.onMessage.addListener((message: BackgroundMessage) => {
  return Promise.resolve(consent.receiveMessageCallback(message));
});

chrome.runtime.connect({ name: `instance-${consent.id}` });
