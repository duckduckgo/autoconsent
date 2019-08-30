import Tab from './web/tab';
import handleContentMessage from './web/content';
import { rules } from './index';

export * from './index';
export {
  Tab,
  handleContentMessage,
}

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

class TabConsent {
  constructor(tab, url, rule) {
    this.tab = tab;
    this.url = url;
    this.rule = rule;
  }

  getCMPName() {
    if (this.rule) {
      return this.rule.name;
    }
    return null;
  }

  async isPopupOpen() {
    return await this.rule.detectPopup(this.tab) || await new Promise((resolve) => {
      setTimeout(async () => resolve(await this.rule.detectPopup(this.tab)), 1000);
    });
  }

  async doOptOut() {
    return this.rule.optOut(this.tab);
  }

  async doOptIn() {
    return this.rule.optIn(this.tab);
  }

  hasTest() {
    return !!this.rule.test
  }

  async testOptOutWorked() {
    return this.rule.test(this.tab);
  }

  async applyCosmetics(selectors) {
    const hidden = await this.tab.hideElements(selectors);
    return hidden;
  }
}

export default class AutoConsent {
  constructor(sendContentMessage) {
    this.consentFrames = new Map();
    this.tabCmps = new Map();
    this.sendContentMessage = sendContentMessage;
  }

  createTab(tabId, url) {
    return new Tab(tabId,
      url,
      this.consentFrames.get(tabId),
      this.sendContentMessage);
  }

  async checkTab(tabId) {
    const tabInfo = await browser.tabs.get(tabId);
    const pageUrl = new URL(tabInfo.url);
    if (!this.tabCmps.has(tabId) || this.tabCmps.get(tabId).url !== pageUrl.href) {
      const tab = this.createTab(tabId, pageUrl.href);
      const rule = await detectDialog(tab, 5);
      const consent = new TabConsent(tab, pageUrl, rule);
      this.tabCmps.set(tabId, consent);
      if (this.consentFrames.has(tabId)) {
        const frame = this.consentFrames.get(tabId);
        console.log('check frame', frame, rule);
        if (frame.type === rule.name) {
          consent.tab.frame = frame;
        }
      }
    }

    return this.tabCmps.get(tabId);
  }

  removeTab(tabId) {
    this.tabCmps.delete(tabId);
  }

  onFrame({ tabId, url, frameId }) {
    // ignore main frames
    if (frameId === 0) {
      return;
    }
    try {
      const frame = {
        id: frameId,
        url: url,
      };
      const tab = this.createTab(tabId, url);
      const frameMatch = rules.findIndex(r => r.detectFrame(tab, frame));
      if (frameMatch > -1) {
        this.consentFrames.set(tabId, {
          type: rules[frameMatch].name,
          url,
          id: frameId,
        });
        if (this.tabCmps.has(tabId)) {
          this.tabCmps.get(tabId).tab.frame = this.consentFrames.get(tabId);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

}
