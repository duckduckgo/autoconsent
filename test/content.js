import handleContentMessage from '../lib/web/content';

chrome.runtime.onMessage.addListener(handleContentMessage);

chrome.runtime.sendMessage({
  type: 'frame',
  url: window.location.href,
});
