import { ContentScriptMessage } from "./messages";

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
  hideElements(selectors: string[], frameId?: number): Promise<boolean>
  undoHideElements(frameId?: number): Promise<boolean>
  goto(url: string): Promise<void>
  wait(ms: number): Promise<true>

  // Consent-O-Matic methods
  matches(matcherConfig: any): Promise<boolean>
  executeAction(actionConfig: any, param?: any): Promise<boolean>
}

export type MessageSender<ResultType = any> = (tabId: number, message: ContentScriptMessage, options?: { frameId: number }) => Promise<ResultType>;

export interface AutoCMP {
  name: string
  hasSelfTest: boolean
  prehideSelectors?: string[]
  isHidingRule?: boolean
  detectCmp(tab: TabActor): Promise<boolean>
  detectPopup(tab: TabActor): Promise<boolean>
  optOut(tab:TabActor): Promise<boolean>
  optIn(tab: TabActor): Promise<boolean>
  openCmp(tab: TabActor): Promise<boolean>
  test(tab: TabActor): Promise<boolean>
  detectFrame(tab: TabActor, frame: { url: string }): boolean
}

type FindResult = {
  parent?: any
  target?: {
    checked: boolean
  }
}
