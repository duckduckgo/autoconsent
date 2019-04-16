/* eslint-disable no-await-in-loop */
import AutoConsentBase from './base';

async function clickFirstMatching(tab, elements) {
  const exists = await Promise.all(elements.map(e => tab.elementExists(e)));
  const first = exists.findIndex(e => !!e);
  if (first >= 0) {
    await tab.clickElement(elements[first]);
    return;
  }
  throw new Error('cannot open CMP');
}

export default class AppGdpr extends AutoConsentBase {
  constructor() {
    super('app_gdpr');
  }

  detectCmp(tab) {
    return tab.elementExists('div[class^="app_gdpr-"]');
  }

  async detectPopup(tab) {
    return !await tab.elementExists('div[class*="banner_hidden-"]')
      && await tab.elementsAreVisible('div[class*="popup_popup-"],div[class*="banner_banner-"],div[class*="main_banner-"]', 'any')
      && this.detectCmp(tab);
  }

  async optOut(tab) {
    await clickFirstMatching(tab, [
      'a[class^="banner_learnMore-"]',
      'button[class*="intro_rejectAll-"],span[class*="intro_rejectAll-"]',
      // link to open options has no class or id, so this might be flaky
      'div[class^="banner_message-"] > span:first-child > a',
      'div[class^="banner_copy-"] > a',
      'div[class^="main_buttons-"] > div > button:first-child',
      'div[class^="banner_option-"]:nth-child(3) > a,a[class^="banner_option-"]:nth-child(3)',
    ]);

    if (await tab.elementExists('button[class*="details_btnDeactivate-"]')) {
      await tab.clickElement('button[class*="details_btnDeactivate-"]');
      return tab.clickElement('button[class*="details_btnSave-"]')
    } else if (await tab.elementExists('div[class*="purposes_purposeItem-"]')) {
      let i = 1;
      while (await tab.elementExists(`div[class*="purposes_purposeItem-"]:nth-child(${i})`)) {
        await tab.clickElement(`div[class*="purposes_purposeItem-"]:nth-child(${i})`);
        await tab.clickElements('span[class*="switch_isSelected-"]');
        i += 1;
      }
    } else if (await tab.elementExists('span[class*="switch_isSelected-"]')) {
      // streamlined UI with categories
      await tab.clickElements('span[class*="switch_isSelected-"]');
    } else {
      // we have to turn off vendors for all categories...
      let i = 1;
      while (await tab.elementExists(`div[class*="summary_purposeItem-"]:nth-child(${i}) > a`)) {
        await tab.clickElement(`div[class*="summary_purposeItem-"]:nth-child(${i}) > a`);
        await tab.clickElements('span[class*="switch_isSelected-"]');
        await tab.clickElement('button[class*="details_back"]');
        i += 1;
      }
    }
    await tab.clickElement('button[class*="details_save"]');
  }

  async optIn(tab) {
    if (await tab.elementExists('a[class^="banner_continue-"]')) {
      await tab.clickElement('a[class^="banner_continue-"]');
    }
    if (await tab.elementExists('span[class^="banner_consent-"')) {
      await tab.clickElement('span[class^="banner_consent-"');
    }
    return true;
  }
}
