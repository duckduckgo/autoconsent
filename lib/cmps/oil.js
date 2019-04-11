import AutoConsentBase, { waitFor } from './base';
import { OilCookie } from './storage';

export default class Oil extends AutoConsentBase {
  constructor() {
    super('oil');
  }

  async detectCmp(tab) {
    return await this.detectPopup(tab) || tab.elementExists('#oil-frame');
  }

  async detectPopup(tab) {
    return tab.elementExists('.as-oil-content-overlay');
  }

  async optOut(tab) {
    if (await tab.elementExists('.as-js-advanced-settings')) {
      // opt-out available via UI
      await tab.clickElement('.as-js-advanced-settings');
      await tab.waitForElement('.as-js-btn-deactivate-all', 10000);
      await tab.clickElement('.as-js-btn-deactivate-all');
      await tab.clickElement('.as-oil__btn-optin');
    } else {
      // opt-in then modify oil cookies
      await this.optIn(tab);
      const browserTab = await tab.getBrowserTab();
      const consentCookie = new OilCookie({ tab: browserTab, browser: tab.browser });
      await waitFor(async () => await consentCookie.get() !== null, 10, 1000);
      await consentCookie.update({
        allowedPurposeIds: [],
        getConsentString: () => undefined,
      });
    }
  }

  async optIn(tab) {
    return tab.clickElement('.as-oil__btn-optin');
  }
}
