import { BackgroundMessage } from "../lib/messages";
import AutoConsent from "../lib/web";

const consent = new AutoConsent(browser.runtime.sendMessage);
browser.runtime.onMessage.addListener((message: BackgroundMessage) => {
  return Promise.resolve(consent.receiveMessageCallback(message));
});
