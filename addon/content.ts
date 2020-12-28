import handleContentMessage from "../lib/web/content";

browser.runtime.onMessage.addListener((message) => {
  return handleContentMessage(message, false);
});

browser.runtime.sendMessage({
  type: "frame",
  url: window.location.href,
});
