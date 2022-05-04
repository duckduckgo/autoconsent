import { enableLogs } from './config';
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
      enableLogs && console.log('checking if popup is open...', this.tab.id, this.rule.name);
      const isOpen = await this.rule.detectPopup(this.tab);
      if (!isOpen && retries > 0) {
        return new Promise((resolve) => setTimeout(() => resolve(this.isPopupOpen(retries - 1, interval)), interval));
      }
      enableLogs && console.log(`popup is ${isOpen ? 'open' : 'not open'}`);
      return isOpen;
    }
  
    async doOptOut() {
      try {
        enableLogs && console.log(`doing opt out ${this.getCMPName()} in tab ${this.tab.id}`);
        this.optOutStatus = await this.rule.optOut(this.tab);
        return this.optOutStatus;
      } catch (e) {
        console.error('error during opt out', e);
        this.optOutStatus = e;
        throw e;
      } finally {
        if (!this.rule.isHidingRule) {
          enableLogs && console.log('unhiding elements');
          if (this.getCMPName().startsWith('com_')) {
            this.tab.wait(5000).then(() => this.tab.undoHideElements())
          } else {
            await this.tab.undoHideElements();
          }
        }
      }
    }
  
    async doOptIn() {
      try {
        return this.rule.optIn(this.tab);
      } finally {
        if (!this.rule.isHidingRule) {
          await this.tab.undoHideElements();
        }
      }
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