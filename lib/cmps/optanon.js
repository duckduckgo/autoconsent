import AutoConsentBase from './base';

export default class Optanon extends AutoConsentBase {
  constructor() {
    super('Optanon');
  }

  async detectCmp(tab) {
    return tab.elementExists('.optanon-alert-box-wrapper');
  }

  async detectPopup(tab) {
    return tab.elementsAreVisible('.optanon-alert-box-wrapper', 'all');
  }

  async optOut(tab) {
    await tab.clickElement('.optanon-toggle-display');
    await ['necessary', 'performance', 'functional', 'advertising', 'social'].reduce((queue, panel) => {
      return queue.then(async () => {
        const panelClass = `.menu-item-${panel}`;
        if (await tab.elementExists(panelClass)) {
          await tab.clickElement(panelClass);
          await tab.clickElement('.optanon-status-on input');
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      });
    }, Promise.resolve());
    if (await tab.elementExists('.optanon-save-settings-button button')) {
      await tab.clickElement('.optanon-save-settings-button button');
    } else {
      await tab.clickElement('.optanon-save-settings-button a');
    }
    return true;
  }

  async optIn(tab) {
    return tab.clickElement('.accept-cookies-button');
  }

  async openCmp(tab) {
    if (!await tab.elementsAreVisible('.optanon-alert-box-wrapper', 'all')) {
      await tab.eval('Optanon.ToggleInfoDisplay();');
    }
    return true;
  }
}
