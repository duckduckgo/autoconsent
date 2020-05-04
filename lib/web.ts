import Tab from './web/tab';
import handleContentMessage from './web/content';
import { rules, createAutoCMP } from './index';
import { Browser, MessageSender, AutoCMP, TabActor } from './types';
import { ConsentOMaticCMP, ConsentOMaticConfig } from './consentomatic/index';
import { AutoConsentCMPRule } from './rules';

export * from './index';
export {
  Tab,
  handleContentMessage,
}

class TabConsent {
  checked: Promise<AutoCMP>
  rule: AutoCMP

  constructor(public tab: TabActor, public url: URL, ruleCheckPromise: Promise<AutoCMP>) {
    this.checked = ruleCheckPromise;
    ruleCheckPromise.then(rule => this.rule = rule);
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
    return !!this.rule.hasSelfTest
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
  consentFrames: Map<number, any> = new Map()
  tabCmps: Map<number, TabConsent> = new Map()
  rules: AutoCMP[]

  constructor(protected browser: Browser, protected sendContentMessage: MessageSender) {
    this.sendContentMessage = sendContentMessage;
    this.rules = [...rules];
  }

  addCMP(config: AutoConsentCMPRule) {
    this.rules.push(createAutoCMP(config));
  }

  addConsentomaticCMP(name: string, config: ConsentOMaticConfig) {
    this.rules.push(new ConsentOMaticCMP(`com_${name}`, config));
  }

  createTab(tabId: number, url: string) {
    return new Tab(tabId,
      url,
      this.consentFrames.get(tabId),
      this.sendContentMessage,
      this.browser);
  }

  async checkTab(tabId: number) {
    const tabInfo = await this.browser.tabs.get(tabId);
    const pageUrl = new URL(tabInfo.url);
    if (!this.tabCmps.has(tabId) || this.tabCmps.get(tabId).url.href !== pageUrl.href) {
      const tab = this.createTab(tabId, pageUrl.href);
      const consent = new TabConsent(tab, pageUrl, this.detectDialog(tab, 5));
      this.tabCmps.set(tabId, consent);
      // check tabs
      consent.checked.then((rule) => {
        if (this.consentFrames.has(tabId)) {
          const frame = this.consentFrames.get(tabId);
          if (frame.type === rule.name) {
            consent.tab.frame = frame;
          }
        }
      });
    }

    return this.tabCmps.get(tabId);
  }

  removeTab(tabId: number) {
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
      const frameMatch = this.rules.findIndex(r => r.detectFrame(tab, frame));
      if (frameMatch > -1) {
        this.consentFrames.set(tabId, {
          type: this.rules[frameMatch].name,
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

  async detectDialog(tab: TabActor, retries: number): Promise<AutoCMP> {
    const detect = await Promise.all(this.rules.map(r => r.detectCmp(tab)));
    const found = detect.findIndex(r => r);
    if (found === -1 && retries > 0) {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const result = this.detectDialog(tab, retries - 1);
          resolve(result);
        }, 1000);
      });
    }
    return found > -1 ? this.rules[found] : null;
  }

}
