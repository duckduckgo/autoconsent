/* eslint-disable no-restricted-syntax,no-await-in-loop,no-underscore-dangle */

import { AutoCMP, TabActor } from "../types";
import { AutoConsentCMPRule, AutoConsentRuleStep } from "../rules";

export async function waitFor(predicate: () => Promise<boolean> | boolean, maxTimes: number, interval: number): Promise<boolean> {
  let result = false;
  try {
    result = await predicate();
  } catch (e) {
    console.warn('error in waitFor predicate', e);
  }
  if (!result && maxTimes > 0) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(waitFor(predicate, maxTimes - 1, interval));
      }, interval);
    });
  }
  return Promise.resolve(result);
}



export default class AutoConsentBase implements AutoCMP {

  name: string
  hasSelfTest = true

  constructor(name: string) {
    this.name = name;
  }

  detectCmp(tab: TabActor): Promise<boolean>  {
    throw new Error('Not Implemented');
  }

  async detectPopup(tab: TabActor) {
    return false;
  }

  detectFrame(tab: TabActor, frame: { url: string }) {
    return false;
  }

  optOut(tab: TabActor): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  optIn(tab: TabActor): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  openCmp(tab: TabActor): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  async test(tab: TabActor): Promise<boolean> {
    // try IAB by default
    await tab.eval('__cmp(\'getVendorConsents\', undefined, r => window.__rcsResult = r)');
    return tab.eval('Object.values(window.__rcsResult.purposeConsents).every(c => !c)');
  }
}

async function evaluateRule(rule: AutoConsentRuleStep, tab: TabActor) {
  if (rule.frame && !tab.frame) {
    await waitFor(() => Promise.resolve(!!tab.frame), 10, 500);
  }
  const frameId = rule.frame ? tab.frame!!.id : undefined;
  const results = [];
  if (rule.exists) {
    results.push(tab.elementExists(rule.exists, frameId));
  }
  if (rule.visible) {
    results.push(tab.elementsAreVisible(rule.visible, rule.check, frameId));
  }
  if (rule.eval) {
    results.push(new Promise(async (resolve) => {
      // catch eval error silently
      try {
        resolve(await tab.eval(rule.eval!, frameId));
      } catch (e) {
        resolve(false);
      }
    }));
  }
  if (rule.waitFor) {
    results.push(tab.waitForElement(rule.waitFor, rule.timeout || 10000, frameId));
  }
  if (rule.click) {
    if (rule.all === true) {
      results.push(tab.clickElements(rule.click, frameId));
    } else {
      results.push(tab.clickElement(rule.click, frameId));
    }
  }
  if (rule.waitForThenClick) {
    results.push(tab.waitForElement(rule.waitForThenClick, rule.timeout || 10000, frameId)
      .then(() => tab.clickElement(rule.waitForThenClick!, frameId)));
  }
  if (rule.wait) {
    results.push(tab.wait(rule.wait));
  }
  if (rule.url) {
    results.push(Promise.resolve(tab.url.startsWith(rule.url)));
  }
  if (rule.goto) {
    results.push(tab.goto(rule.goto));
  }
  if (rule.hide) {
    results.push(tab.hideElements(rule.hide, frameId));
  }
  if (rule.waitForFrame) {
    results.push(waitFor(() => !!tab.frame, 40, 500))
  }
  // boolean and of results
  return (await Promise.all(results)).reduce((a, b) => a && b, true);
}

export class AutoConsent extends AutoConsentBase {

  constructor(public config: AutoConsentCMPRule) {
    super(config.name);
  }

  async _runRulesParallel(tab: TabActor, rules: AutoConsentRuleStep[]): Promise<boolean> {
    const detections = await Promise.all(rules.map(rule => evaluateRule(rule, tab)));
    return detections.some(r => !!r);
  }

  async _runRulesSequentially(tab: TabActor, rules: AutoConsentRuleStep[]): Promise<boolean> {
    for (const rule of rules) {
      const result = await evaluateRule(rule, tab);
      if (!result && !rule.optional) {
        return false;
      }
    }
    return true;
  }

  async detectCmp(tab: TabActor) {
    if (this.config.detectCmp) {
      return this._runRulesParallel(tab, this.config.detectCmp);
    }
    return false;
  }

  async detectPopup(tab: TabActor) {
    if (this.config.detectPopup) {
      return this._runRulesParallel(tab, this.config.detectPopup);
    }
    return false;
  }

  detectFrame(tab: TabActor, frame: { url: string }) {
    if (this.config.frame) {
      return frame.url.startsWith(this.config.frame);
    }
    return false;
  }

  async optOut(tab: TabActor) {
    if (this.config.optOut) {
      return this._runRulesSequentially(tab, this.config.optOut);
    }
    return false;
  }

  async optIn(tab: TabActor) {
    if (this.config.optIn) {
      return this._runRulesSequentially(tab, this.config.optIn);
    }
    return false;
  }

  async openCmp(tab: TabActor) {
    if (this.config.openCmp) {
      return this._runRulesSequentially(tab, this.config.openCmp);
    }
    return false;
  }

  async test(tab: TabActor) {
    if (this.config.test) {
      return this._runRulesSequentially(tab, this.config.test);
    }
    return super.test(tab);
  }
}
