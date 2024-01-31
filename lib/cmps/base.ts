/* eslint-disable no-restricted-syntax,no-await-in-loop,no-underscore-dangle */

import { AutoCMP, DomActionsProvider } from "../types";
import { AutoConsentCMPRule, AutoConsentRuleStep, ElementSelector, HideMethod, RunContext, VisibilityCheck } from "../rules";
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

export default class AutoConsentCMPBase implements AutoCMP, DomActionsProvider {
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
    const logsConfig = this.autoconsent.config.logs;

    if (this.autoconsent.config.isMainWorld) {
      logsConfig.evals && console.log('inline eval:', snippetId, snippet);
      let result = false;
      try {
        result = !!snippet.call(globalThis);
      } catch (e) {
        // ignore exceptions
        logsConfig.evals && console.error('error evaluating rule', snippetId, e);
      }
      return Promise.resolve(result);
    }

    const snippetSrc = getFunctionBody(snippet);
    logsConfig.evals && console.log('async eval:', snippetId, snippetSrc);
    return requestEval(snippetSrc, snippetId).catch((e) => {
      logsConfig.evals && console.error('error evaluating rule', snippetId, e);
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

  // Implementing DomActionsProvider below:
  click(selector: ElementSelector, all = false) {
    return this.autoconsent.domActions.click(selector, all);
  }

  elementExists(selector: ElementSelector) {
    return this.autoconsent.domActions.elementExists(selector);
  }

  elementVisible(selector: ElementSelector, check: VisibilityCheck) {
    return this.autoconsent.domActions.elementVisible(selector, check);
  }

  waitForElement(selector: ElementSelector, timeout?: number) {
    return this.autoconsent.domActions.waitForElement(selector, timeout);
  }

  waitForVisible(selector: ElementSelector, timeout?: number, check?: VisibilityCheck) {
    return this.autoconsent.domActions.waitForVisible(selector, timeout, check);
  }

  waitForThenClick(selector: ElementSelector, timeout?: number, all?: boolean) {
    return this.autoconsent.domActions.waitForThenClick(selector, timeout, all);
  }

  wait(ms: number) {
    return this.autoconsent.domActions.wait(ms);
  }

  hide(selector: string, method: HideMethod) {
    return this.autoconsent.domActions.hide(selector, method);
  }

  prehide(selector: string) {
    return this.autoconsent.domActions.prehide(selector);
  }

  undoPrehide() {
    return this.autoconsent.domActions.undoPrehide();
  }

  querySingleReplySelector(selector: string, parent?: any) {
    return this.autoconsent.domActions.querySingleReplySelector(selector, parent);
  }

  querySelectorChain(selectors: string[]) {
    return this.autoconsent.domActions.querySelectorChain(selectors);
  }

  elementSelector(selector: ElementSelector) {
    return this.autoconsent.domActions.elementSelector(selector);
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
    const logsConfig = this.autoconsent.config.logs;
    if (this.rule.optOut) {
      logsConfig.lifecycle && console.log('Initiated optOut()', this.rule.optOut);
      return this._runRulesSequentially(this.rule.optOut);
    }
    return false;
  }

  async optIn() {
    const logsConfig = this.autoconsent.config.logs;
    if (this.rule.optIn) {
      logsConfig.lifecycle && console.log('Initiated optIn()', this.rule.optIn);
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
    const results: Array<Promise<boolean> | boolean> = [];
    const logsConfig = this.autoconsent.config.logs;
    if (rule.exists) {
      results.push(this.elementExists(rule.exists));
    }
    if (rule.visible) {
      results.push(this.elementVisible(rule.visible, rule.check));
    }
    if (rule.eval) {
      const res = this.mainWorldEval(rule.eval)
      results.push(res);
    }
    if (rule.waitFor) {
      results.push(this.waitForElement(rule.waitFor, rule.timeout));
    }
    if (rule.waitForVisible) {
      results.push(this.waitForVisible(rule.waitForVisible, rule.timeout, rule.check));
    }
    if (rule.click) {
      results.push(this.click(rule.click, rule.all));
    }
    if (rule.waitForThenClick) {
      results.push(this.waitForThenClick(rule.waitForThenClick, rule.timeout, rule.all));
    }
    if (rule.wait) {
      results.push(this.wait(rule.wait));
    }
    if (rule.hide) {
      results.push(this.hide(rule.hide, rule.method));
    }
    if (rule.if) {
      if (!rule.if.exists && !rule.if.visible) {
        console.error('invalid conditional rule', rule.if);
        return false;
      }
      const condition = await this.evaluateRuleStep(rule.if);
      logsConfig.rulesteps && console.log('Condition is', condition);
      if (condition) {
        results.push(this._runRulesSequentially(rule.then));
      } else if (rule.else) {
        results.push(this._runRulesSequentially(rule.else));
      } else {
        results.push(true);
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
      logsConfig.errors && console.warn('Unrecognized rule', rule);
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
    const logsConfig = this.autoconsent.config.logs;
    for (const rule of rules) {
      logsConfig.rulesteps && console.log('Running rule...', rule);
      const result = await this.evaluateRuleStep(rule);
      logsConfig.rulesteps && console.log('...rule result', result);
      if (!result && !rule.optional) {
        return false;
      }
    }
    return true;
  }
}
