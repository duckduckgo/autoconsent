import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./consentomatic";
import { AutoConsentCMPRule, HideMethod } from "./rules";

type Tab = {
  url: string
}

type BrowserTabs = {
  get(tabId: number): Promise<Tab>
  update(tabId: number, options: any): Promise<void>
}

export type Browser = {
  tabs: BrowserTabs,
}

export interface TabActor {
  frame?: {
    id: number
    url: string
  }
  id: number
  elementExists(selector: string, frameId?: number): Promise<boolean>
  clickElement(selector: string, frameId?: number): Promise<boolean>
  clickElements(selector: string, frameId?: number): Promise<boolean>
  elementsAreVisible(selector: string, check?: 'all' | 'any' | 'none', frameId?: number): Promise<boolean>
  getAttribute(selector: string, attribute: string, frameId?: number): Promise<string>
  eval(script: string, frameId?: number): Promise<boolean>
  waitForElement(selector: string, timeout: number, frameId?: number): Promise<boolean>
  waitForThenClick(selector: string, timeout?: number, frameId?: number): Promise<boolean>
  hideElements(selectors: string[], frameId?: number, method?: HideMethod): Promise<boolean>
  undoHideElements(frameId?: number): Promise<boolean>
  goto(url: string): Promise<void>
  wait(ms: number): Promise<true>

  // Consent-O-Matic methods
  matches(matcherConfig: any): Promise<boolean>
  executeAction(actionConfig: any, param?: any): Promise<boolean>
}

export type MessageSender<ResultType = any> = (message: ContentScriptMessage) => Promise<ResultType>;

export interface AutoCMP {
  name: string
  hasSelfTest: boolean
  prehideSelectors?: string[]
  detectCmp(): Promise<boolean>
  detectPopup(): Promise<boolean>
  optOut(): Promise<boolean>
  optIn(): Promise<boolean>
  openCmp(): Promise<boolean>
  test(): Promise<boolean>
  detectFrame(frame: { url: string }): boolean
}

type FindResult = {
  parent?: any
  target?: {
    checked: boolean
  }
}

export type RuleBundle = {
  autoconsent: AutoConsentCMPRule[];
  consentomatic: { [name: string]: ConsentOMaticConfig };
};
