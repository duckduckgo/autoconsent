import AutoConsent from '../lib/web';

async function checkRules(rules, tab) {
  const matches = [];
  for (let rule of rules) {
    const elem = await tab.elementExists(rule);
    if (elem) {
      matches.push(rule);
    }
  }
  return matches;
}

const tabLoaded = {};
function waitForTabLoaded(id) {
  return new Promise((resolve) => {
    tabLoaded[id] = resolve;
  });
}
window.consent = new AutoConsent();

async function test(url) {
  const tabId = (await browser.tabs.create({
      url,
    })).id;
  await waitForTabLoaded(tabId);
  const tab = await consent.checkTab(tabId);
  const reconsentHidden = await checkRules([], tab.tab);

  const result = {
    site: url,
    url: tab.url.href,
    reconsent: tab.getCMPName(),
    reconsentHidden,
  }

  if (tab.getCMPName() !== null) {
    try {
      result.reconsentCMPShown = await tab.isPopupOpen();
      if (result.reconsentCMPShown) {
        await tab.doOptOut();
      }
      if (tab.hasTest()) {
        await new Promise((res) => setTimeout(res, 5000));
        result.reconsentTest = await tab.testOptOutWorked() || false;
      }
    } catch (e) {
      console.error(e);
      result.reconsentFailure = e.toString();
    }
  }
  await new Promise((res) => setTimeout(res, 500));
  result.screenshot = await browser.tabs.captureTab(tabId);
  await browser.tabs.remove(tabId);
  return result;
}

browser.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  if (changeInfo.status === 'complete' && tabLoaded[tabId]) {
    tabLoaded[tabId]();
  }
});

chrome.webNavigation.onDOMContentLoaded.addListener(window.consent.onFrame.bind(window.consent), {
  url: [{ schemes: ['http', 'https'] }]
});

window.test = test;
window.checkTab = consent.checkTab.bind(consent);

browser.tabs.create({
  url: browser.runtime.getURL('test/crawl.html'),
});
