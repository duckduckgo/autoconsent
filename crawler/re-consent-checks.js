const { rules, waitFor } = require('../');

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

class Tab {
  constructor(page, url, frames) {
    this.page = page;
    this.url = url;
    this.frames = frames;
  }

  async elementExists(selector, frameId = 0) {
    try {
      const elements = await this.frames[frameId].$$(selector)
      return elements.length > 0;
    } catch (e) {
      return false;
    }
  }

  async clickElement(selector, frameId = 0) {
    if (await this.elementExists(selector)) {
      return this.frames[frameId].click(selector);
    }
    return false;
  }

  async clickElements(selector, frameId = 0) {}

  async elementsAreVisible(selector, check, frameId = 0) {
    const visible = await this.frames[frameId].$$eval(selector, nodes => nodes.map(n => n.offestParent !== null));
    if (visible.length === 0) {
      return false;
    } else if (check === 'any') {
      return visible.some(r => r);
    } else if (check === 'none') {
      return visible.every(r => !r);
    }
    return visible.every(r => r);
  }

  async getAttribute(selector, attribute, frameId = 0) {
    const elem = await this.frames[frameId].$(selector);
    if (elem) {
      return (await elem.getProperty(attribute)).jsonValue();
    }
  }

  async eval(script, frameId = 0) {
    return await this.frames[frameId].evaluate(script);
  }

  async waitForElement(selector, timeout, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(() => this.elementExists(selector, frameId), times, interval);
  }

  async goto(url) {
    return this.page.goto(url);
  }
}

async function reConsentCheck(page) {
  const url = await page.url();
  const frames = {
    0: await page.mainFrame(),
  }
  let id = 1;
  const tab = new Tab(page, url, frames);
  await Promise.all((await page.frames()).map(async (frame) => {
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
  }));
  // console.log('checking', url);
  const rule = await detectDialog(tab, 5);
  return {
    url,
    rule: rule ? rule.name : null,
    runOptOut: () => rule.optOut(tab),
  }
}

module.exports = reConsentCheck;