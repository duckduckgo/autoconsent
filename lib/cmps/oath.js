import { ConsentString } from 'consent-string';
import AutoConsentBase from './base';
import { EUConsentCookie } from './storage';

export default class Oath extends AutoConsentBase {
  constructor() {
    super('oath');
  }

  async detectCmp(tab) {
    try {
      return tab.url.startsWith('https://consent.yahoo.com/collectConsent') || await tab.eval('window.OathGUCE !== undefined');
    } catch (e) {
      return false;
    }
  }

  async detectPopup(tab) {
    return tab.url.startsWith('https://consent.yahoo.com/collectConsent');
  }

  async optOut(tab) {
    await this.optIn(tab);
    const browserTab = await tab.getBrowserTab();
    const { browser } = tab;
    const consent = await new Promise((resolve, reject) => {
      const timeout = setTimeout(reject, 30000);
      function detectConsent(msg, sender) {
        if (msg.type === 'detectConsent' && sender.tab.id === tab.id) {
          resolve(msg.consent);
          clearTimeout(timeout);
          browser.runtime.onMessage.removeListener(detectConsent);
        }
      }
      browser.runtime.onMessage.addListener(detectConsent);
    });
    const consentCookie = new EUConsentCookie({ consent, tab: browserTab, browser });
    const cookies = await consentCookie.getConsentCookies();
    const consentString = new ConsentString(cookies[0].value);
    let { vendorList } = consent;

    if (!vendorList || !vendorList.vendorListVersion) {
      vendorList = await (await fetch('https://vendorlist.consensu.org/vendorlist.json')).json();
    }

    consentString.setGlobalVendorList(vendorList);
    consentString.setPurposesAllowed([]);
    consentString.setVendorsAllowed([]);
    await consentCookie.update(consentString);
  }

  async optIn(tab) {
    return tab.clickElement('.agree,.primary');
  }
}
