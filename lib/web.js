import Tab from './web/tab';
import handleContentMessage from './web/content';
import { rules, getCosmeticsForSite } from './index';

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

  async applyCosmetics() {
    const cosmetics = await getCosmeticsForSite(this.url.hostname);
    const hidden = await this.tab.hideElements(cosmetics);
    return hidden;
  }
}

export default class AutoConsent {
  constructor() {
    this.consentFrames = new Map();
    this.tabCmps = new Map();
  }

  init(browser) {
    browser.runtime.onMessage.addListener(this._onMessageListener.bind(this));
  }

  async checkTab(tabId) {
    const tabInfo = await browser.tabs.get(tabId);
    const pageUrl = new URL(tabInfo.url);
    if (!this.tabCmps.has(tabId) || this.tabCmps.get(tabId).url !== pageUrl.href) {
      const tab = new Tab(tabId, pageUrl.href, this.consentFrames.get(tabId));
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

  _onMessageListener(msg, sender) {
    if (msg.type === 'frame') {
      try {
        const frame = {
          id: sender.frameId,
          url: msg.url,
        };
        const tab = new Tab(sender.tab.id, sender.tab.url, this.consentFrames.get(sender.tab.id));
        const frameMatch = rules.findIndex(r => r.detectFrame(tab, frame));
        if (frameMatch > -1) {
          console.log('xxx frame', sender.tab.id, msg.url);
          this.consentFrames.set(sender.tab.id, {
            type: rules[frameMatch].name,
            url: msg.url,
            id: sender.frameId,
          });
          if (this.tabCmps.has(sender.tab.id)) {
            this.tabCmps.get(sender.tab.id).tab.frame = this.consentFrames.get(sender.tab.id);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

}
