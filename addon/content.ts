import { BackgroundMessage } from "../lib/messages";
import AutoConsent from "../lib/web";
import { collectMetrics } from "../lib/web";

const consent = new AutoConsent(chrome.runtime.sendMessage);
chrome.runtime.onMessage.addListener((message: BackgroundMessage) => {
  return Promise.resolve(consent.receiveMessageCallback(message));
});

chrome.runtime.connect({ name: `instance-${consent.id}` });

collectMetrics().then((results) => {
  // pass the results to the native code. ddgPerfMetrics is a custom JS interface
  const resultsJson = JSON.stringify(results);
  console.log(location.href + ' ' + resultsJson);
  window.alert(`PERF METRICS: ` + resultsJson);
});
