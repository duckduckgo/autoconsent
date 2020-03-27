import AutoConsent from '../lib/web';
import cosmetics from '../cosmetics/rules';

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
window.consent = new AutoConsent(browser, browser.tabs.sendMessage);

fetch('/rules/rules.json').then(res => res.json())
.then(rules => {
  Object.keys(rules.consentomatic).forEach((name) => {
    window.consent.addConsentomaticCMP(name, rules.consentomatic[name])
  })
  rules.autoconsent.forEach((rule) => {
    window.consent.addCMP(rule);
  })
});
// window.update = () => fetch('/rules.json').then(res => res.json()).then(rules => rules.forEach((rule) => window.consent.addCMP(rule)))

async function test(url) {
  window.testRunning = true;
  const tabId = (await browser.tabs.create({
      url,
    })).id;
  await waitForTabLoaded(tabId);
  const tab = await consent.checkTab(tabId);
  await tab.checked;
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
  window.testRunning = false;
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

fetch('./fanboy-cookiemonster.txt').then(res => res.text()).then((lines) => {
  window.fanboyCosmetics = lines.split('\n').filter(l => l.startsWith('##')).map(l => l.slice(2));
});

window.test = test;
window.checkTab = consent.checkTab.bind(consent);
window.cosmeticRules = cosmetics;

browser.tabs.create({
  url: browser.runtime.getURL('test/crawl.html'),
});
