import { AutoCMP, TabActor } from './types';

export default class TabConsent {
    checked: Promise<AutoCMP>
    rule: AutoCMP
    optOutStatus: boolean | Error = null
  
    constructor(public tab: TabActor, ruleCheckPromise: Promise<AutoCMP>) {
      this.checked = ruleCheckPromise;
      ruleCheckPromise.then(rule => this.rule = rule);
    }
  
    getCMPName() {
      if (this.rule) {
        return this.rule.name;
      }
      return null;
    }
  
    async isPopupOpen(retries = 1, interval = 1000): Promise<boolean> {
      const isOpen = await this.rule.detectPopup(this.tab);
      if (!isOpen && retries > 0) {
        return new Promise((resolve) => setTimeout(() => resolve(this.isPopupOpen(retries - 1, interval)), interval));
      }
      return isOpen;
    }
  
    async doOptOut() {
      try {
        this.optOutStatus = await this.rule.optOut(this.tab);
        return this.optOutStatus;
      } catch (e) {
        this.optOutStatus = e;
        throw e;
      }
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
  
    async applyCosmetics(selectors: string[]) {
      const hidden = await this.tab.hideElements(selectors);
      return hidden;
    }
  }