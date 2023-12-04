/* eslint-disable no-restricted-syntax,no-await-in-loop,no-underscore-dangle */

import { AutoCMP } from "../types";
import { AutoConsentCMPRule, AutoConsentRuleStep, RunContext } from "../rules";
import { enableLogs } from "../config";
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
    return requestEval(snippetSrc).catch((e) => {
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

  constructor(public config: AutoConsentCMPRule, autoconsentInstance: AutoConsent) {
    super(autoconsentInstance);
    this.name = config.name;
    this.runContext = config.runContext || defaultRunContext;
  }

  get hasSelfTest(): boolean {
    return !!this.config.test;
  }

  get isIntermediate(): boolean {
    return !!this.config.intermediate;
  }

  get isCosmetic(): boolean {
    return !!this.config.cosmetic;
  }

  get prehideSelectors(): string[] {
    return this.config.prehideSelectors;
  }

  async detectCmp() {
    if (this.config.detectCmp) {
      return this._runRulesParallel(this.config.detectCmp);
    }
    return false;
  }

  async detectPopup() {
    if (this.config.detectPopup) {
      return this._runRulesSequentially(this.config.detectPopup);
    }
    return false;
  }

  async optOut() {
    if (this.config.optOut) {
      enableLogs && console.log('Initiated optOut()', this.config.optOut);
      return this._runRulesSequentially(this.config.optOut);
    }
    return false;
  }

  async optIn() {
    if (this.config.optIn) {
      enableLogs && console.log('Initiated optIn()', this.config.optIn);
      return this._runRulesSequentially(this.config.optIn);
    }
    return false;
  }

  async openCmp() {
    if (this.config.openCmp) {
      return this._runRulesSequentially(this.config.openCmp);
    }
    return false;
  }

  async test() {
    if (this.hasSelfTest) {
      return this._runRulesSequentially(this.config.test);
    }
    return super.test();
  }

  async evaluateRuleStep(rule: AutoConsentRuleStep) {
    const results = [];
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
