/* eslint-disable no-restricted-syntax,no-await-in-loop,no-underscore-dangle */

import { AutoCMP } from "../types";
import { AutoConsentCMPRule, AutoConsentRuleStep, RunContext } from "../rules";
import { click, elementExists, elementVisible, hide, wait, waitForElement, waitForThenClick, waitForVisible } from "../rule-executors";
import { requestEval } from "../eval-handler";
import AutoConsent from "../web";
import { getFunctionBody, snippets } from "../eval-snippets";

export async function success(action: Promise<boolean>): Promise<boolean> {
  const result = await action;
  if (!result) {
    throw new Error(`Action failed: ${action} ${result}`)
  }
  return result
}

export const defaultRunContext: RunContext = {
  main: true,
  frame: false,
  urlPattern: "",
}

export default class AutoConsentCMPBase implements AutoCMP {
  name: string
  runContext: RunContext = defaultRunContext;
  autoconsent: AutoConsent;

  constructor(autoconsentInstance: AutoConsent) {
    this.autoconsent = autoconsentInstance;
  }

  get hasSelfTest(): boolean {
    throw new Error('Not Implemented');
  }

  get isIntermediate(): boolean {
    throw new Error('Not Implemented');
  }

  get isCosmetic(): boolean {
    throw new Error('Not Implemented');
  }

  mainWorldEval(snippetId: keyof typeof snippets): Promise<boolean> {
    const snippet = snippets[snippetId];
    if (!snippet) {
      console.warn('Snippet not found', snippetId);
      return Promise.resolve(false);
    }
    const enableLogs = this.autoconsent.config.enableLogs;

    if (this.autoconsent.config.isMainWorld) {
      enableLogs && console.log('inline eval:', snippetId, snippet);
      let result = false;
      try {
        result = !!snippet.call(globalThis);
      } catch (e) {
        // ignore exceptions
        enableLogs && console.error('error evaluating rule', snippetId, e);
      }
      return Promise.resolve(result);
    }

    const snippetSrc = getFunctionBody(snippet);
    enableLogs && console.log('async eval:', snippetId, snippetSrc);
    return requestEval(snippetSrc, snippetId).catch((e) => {
      enableLogs && console.error('error evaluating rule', snippetId, e);
      return false;
    });
  }

  checkRunContext(): boolean {
    const runCtx: RunContext = {
      ...defaultRunContext,
      ...this.runContext,
    }

    const isTop = window.top === window;

    if (isTop && !runCtx.main) {
      return false;
    }

    if (!isTop && !runCtx.frame) {
      return false;
    }

    if (runCtx.urlPattern && !window.location.href.match(runCtx.urlPattern)) {
      return false;
    }
    return true;
  }

  detectCmp(): Promise<boolean>  {
    throw new Error('Not Implemented');
  }

  async detectPopup() {
    return false;
  }

  optOut(): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  optIn(): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  openCmp(): Promise<boolean> {
    throw new Error('Not Implemented');
  }

  async test(): Promise<boolean> {
    // try IAB by default
    return Promise.resolve(true);
  }
}

export class AutoConsentCMP extends AutoConsentCMPBase {

  constructor(public rule: AutoConsentCMPRule, autoconsentInstance: AutoConsent) {
    super(autoconsentInstance);
    this.name = rule.name;
    this.runContext = rule.runContext || defaultRunContext;
  }

  get hasSelfTest(): boolean {
    return !!this.rule.test;
  }

  get isIntermediate(): boolean {
    return !!this.rule.intermediate;
  }

  get isCosmetic(): boolean {
    return !!this.rule.cosmetic;
  }

  get prehideSelectors(): string[] {
    return this.rule.prehideSelectors;
  }

  async detectCmp() {
    if (this.rule.detectCmp) {
      return this._runRulesParallel(this.rule.detectCmp);
    }
    return false;
  }

  async detectPopup() {
    if (this.rule.detectPopup) {
      return this._runRulesSequentially(this.rule.detectPopup);
    }
    return false;
  }

  async optOut() {
    const enableLogs = this.autoconsent.config.enableLogs;
    if (this.rule.optOut) {
      enableLogs && console.log('Initiated optOut()', this.rule.optOut);
      return this._runRulesSequentially(this.rule.optOut);
    }
    return false;
  }

  async optIn() {
    const enableLogs = this.autoconsent.config.enableLogs;
    if (this.rule.optIn) {
      enableLogs && console.log('Initiated optIn()', this.rule.optIn);
      return this._runRulesSequentially(this.rule.optIn);
    }
    return false;
  }

  async openCmp() {
    if (this.rule.openCmp) {
      return this._runRulesSequentially(this.rule.openCmp);
    }
    return false;
  }

  async test() {
    if (this.hasSelfTest) {
      return this._runRulesSequentially(this.rule.test);
    }
    return super.test();
  }

  async evaluateRuleStep(rule: AutoConsentRuleStep) {
    const results = [];
    const enableLogs = this.autoconsent.config.enableLogs;
    if (rule.exists) {
      results.push(elementExists(rule.exists));
    }
    if (rule.visible) {
      results.push(elementVisible(rule.visible, rule.check));
    }
    if (rule.eval) {
      const res = this.mainWorldEval(rule.eval)
      results.push(res);
    }
    if (rule.waitFor) {
      results.push(waitForElement(rule.waitFor, rule.timeout));
    }
    if (rule.waitForVisible) {
      results.push(waitForVisible(rule.waitForVisible, rule.timeout, rule.check));
    }
    if (rule.click) {
      results.push(click(rule.click, rule.all));
    }
    if (rule.waitForThenClick) {
      results.push(waitForThenClick(rule.waitForThenClick, rule.timeout, rule.all));
    }
    if (rule.wait) {
      results.push(wait(rule.wait));
    }
    if (rule.hide) {
      results.push(hide(rule.hide, rule.method));
    }
    if (rule.if) {
      if (!rule.if.exists && !rule.if.visible) {
        console.error('invalid conditional rule', rule.if);
        return false;
      }
      const condition = await this.evaluateRuleStep(rule.if);
      enableLogs && console.log('Condition is', condition);
      if (condition) {
        results.push(this._runRulesSequentially(rule.then));
      } else if (rule.else) {
        results.push(this._runRulesSequentially(rule.else));
      }
    }
    if (rule.any) {
      for (const step of rule.any) {
        if (await this.evaluateRuleStep(step)) {
          return true
        }
      }
      return false
    }
  
    if (results.length === 0) {
      enableLogs && console.warn('Unrecognized rule', rule);
      return false;
    }
  
    // boolean and of results
    const all = await Promise.all(results);
    return all.reduce((a, b) => a && b, true);
  }

  async _runRulesParallel(rules: AutoConsentRuleStep[]): Promise<boolean> {
    const results = rules.map(rule => this.evaluateRuleStep(rule));
    const detections = await Promise.all(results);
    return detections.every(r => !!r);
  }
  
  async _runRulesSequentially(rules: AutoConsentRuleStep[]): Promise<boolean> {
    const enableLogs = this.autoconsent.config.enableLogs;
    for (const rule of rules) {
      enableLogs && console.log('Running rule...', rule);
      const result = await this.evaluateRuleStep(rule);
      enableLogs && console.log('...rule result', result);
      if (!result && !rule.optional) {
        return false;
      }
    }
    return true;
  }
}
