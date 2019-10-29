
const tabs = new Map();

browser.tabs.onActivated.addListener(() => {
  checkCurrentTab();
});
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  if (changeInfo.status === 'complete' && tabInfo.active) {
    checkCurrentTab();
  }
});

async function checkCurrentTab() {
  const window = await browser.windows.getCurrent({populate: true});
  const activeTab = window.tabs.find(t => t.active);
  if (activeTab && activeTab.id && !window.testRunning) {
    const { checkTab, cosmeticRules, testRunning } = await browser.runtime.getBackgroundPage();
    if (testRunning) {
      return;
    }
    const tabId = activeTab.id;
    const url = activeTab.url;
    document.getElementById('url').innerText = url;
    document.getElementById('cmp').innerText = 'checking...';
    document.getElementById('popup_shown').innerText = 'checking...';
    document.getElementById('optout').innerText = '';
    document.getElementById('optout_test').innerText = '';
    const tab = tabs.has(tabId) && tabs.get(tabId).url === url
      ? tabs.get(tabId) : await checkTab(tabId);
    tabs.set(tabId, tab);
    console.log('xxx', tab);
    await tab.checked;

    // async cosmetics check
    await tab.applyCosmetics(cosmeticRules.static).then((cosmetics) => {
      if (cosmetics.length > 0) {
        document.getElementById('cosmetics').innerText = cosmetics.join(', ');
      } else {
        document.getElementById('cosmetics').innerText = 'none';
        document.getElementById('cosmetics2').innerHTML = '<a href="#">check</a>';
        document.getElementById('cosmetics2').addEventListener('click', () => {
          checkFanboyCosmetics(tab);
        });
      }
    });

    document.getElementById('cmp').innerText = tab.rule ? tab.getCMPName() : 'None';
    if (tab.getCMPName() === null) {
      document.getElementById('popup_shown').innerText = 'N/A';
      return
    }
    const reconsentCMPShown = await tab.isPopupOpen();
    document.getElementById('popup_shown').innerText = reconsentCMPShown ? 'Yes' : 'No';

    if (reconsentCMPShown) {
      document.getElementById('optout').innerText = "Running";
      const now = Date.now();
      await tab.doOptOut();
      document.getElementById('optout').innerText = `Done: ${Date.now() - now}ms`;
    }
    if (tab.hasTest()) {
      document.getElementById('optout_test').innerText = "Running";
      await new Promise((res) => setTimeout(res, 5000));
      const reconsentTest = await tab.testOptOutWorked() || false;
      document.getElementById('optout_test').innerText = reconsentTest ? 'PASS' : 'FAIL';
    }
  }
}

async function checkFanboyCosmetics(tab) {
  const { fanboyCosmetics } = await browser.runtime.getBackgroundPage();
  const cosmetics = await tab.applyCosmetics(fanboyCosmetics);
  if (cosmetics.length > 0) {
    document.getElementById('cosmetics2').innerText = cosmetics.join(', ');
  } else {
    document.getElementById('cosmetics2').innerText = 'none';
  }
}

document.getElementById('run').addEventListener('click', checkCurrentTab);

checkCurrentTab();