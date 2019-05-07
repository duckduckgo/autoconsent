const { rules, Tab } = require('../');

async function detectDialog(tab, retries) {
  const detect = await Promise.all(rules.map(r => r.detectCmp(tab)));
  const found = detect.findIndex(r => r);
  if (found === -1 && retries > 0) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const result = detectDialog(tab, retries - 1);
        resolve(result);
      }, 1000);
    });
  }
  return found > -1 ? rules[found] : null;
}

async function reConsentCheck(page) {
  const url = await page.url();
  const frames = {
    0: await page.mainFrame(),
  }
  let id = 1;
  const tab = new Tab(page, url, frames);
  const addFrame = async (frame) => {
    const f = {
      id: ++id,
      url: await frame.url(),
    }
    // console.log('check frame', f.url);
    frames[f.id] = frame;
    const frameMatch = rules.findIndex(r => r.detectFrame(tab, f));
    if (frameMatch > -1) {
      tab.frame = {
        type: rules[frameMatch].name,
        url: f.url,
        id: f.id,
      };
    }
  }
  await Promise.all((await page.frames()).map(addFrame));
  page.on('frameattached', addFrame);
  page.on('framenavigated', addFrame);

  const rule = await detectDialog(tab, 5);
  return {
    url,
    rule: rule ? rule.name : null,
    testable: rule && rule.test,
    isShown: () => rule.detectPopup(tab),
    runOptOut: () => rule.optOut(tab),
    test: () => rule.test(tab),
  }
}

module.exports = reConsentCheck;