import { ContentScriptMessage } from "../lib/messages";
import AutoConsent from "../lib/web";

// browser.runtime.onMessage.addListener((message: ContentScriptMessage) => {
//   return Promise.resolve(handleContentMessage(message, false));
// });

const consent = new AutoConsent(<any>browser, browser.runtime.sendMessage);
