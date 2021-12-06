import { ContentScriptMessage } from "../lib/messages";
import handleContentMessage from "../lib/web/content";

browser.runtime.onMessage.addListener((message: ContentScriptMessage) => {
  return Promise.resolve(handleContentMessage(message, false));
});

browser.runtime.sendMessage({
  type: "frame",
  url: window.location.href,
});
