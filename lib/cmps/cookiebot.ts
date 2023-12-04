import { click, elementExists, wait } from '../rule-executors';
import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

export default class Cookiebot extends AutoConsentCMPBase {
  name = 'Cybotcookiebot';
  prehideSelectors = ["#CybotCookiebotDialog,#CybotCookiebotDialogBodyUnderlay,#dtcookie-container,#cookiebanner,#cb-cookieoverlay,.modal--cookie-banner,#cookiebanner_outer,#CookieBanner"]

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return false;
  }

  async detectCmp() {
    return await this.mainWorldEval('EVAL_COOKIEBOT_1');
  }

  async detectPopup() {
    return await waitFor(() => {
      return this.mainWorldEval('EVAL_COOKIEBOT_2')
    }, 10, 500);
  }

  async optOut() {
    await wait(500);
    let res = await this.mainWorldEval('EVAL_COOKIEBOT_3'); // withdraw
    await wait(500); // prevent race conditions
    res = res && await this.mainWorldEval('EVAL_COOKIEBOT_4'); // hide
    return res;
  }

  async optIn() {
    if (elementExists('#dtcookie-container')) {
      return click('.h-dtcookie-accept');
    }

    click('.CybotCookiebotDialogBodyLevelButton:not(:checked):enabled', true);
    click('#CybotCookiebotDialogBodyLevelButtonAccept');
    click('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async test() {
    await wait(500);
    return await this.mainWorldEval('EVAL_COOKIEBOT_5');
  }
}
