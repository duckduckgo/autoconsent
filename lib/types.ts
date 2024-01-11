import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./cmps/consentomatic";
import { AutoConsentCMPRule, ElementSelector, HideMethod, RunContext, VisibilityCheck } from "./rules";

export type MessageSender = (message: ContentScriptMessage) => Promise<void>;

export interface AutoCMP {
  name: string
  hasSelfTest: boolean
  isIntermediate: boolean;
  isCosmetic: boolean;
  prehideSelectors?: string[];
  runContext: RunContext;
  checkRunContext(): boolean;
  detectCmp(): Promise<boolean>
  detectPopup(): Promise<boolean>
  optOut(): Promise<boolean>
  optIn(): Promise<boolean>
  openCmp(): Promise<boolean>
  test(): Promise<boolean>
}

export interface DomActionsProvider {
  click(selector: ElementSelector, all: boolean): boolean;
  elementExists(selector: ElementSelector): boolean;
  elementVisible(selector: ElementSelector, check: VisibilityCheck): boolean;
  waitForElement(selector: ElementSelector, timeout?: number): Promise<boolean>;
  waitForVisible(selector: ElementSelector, timeout?: number, check?: VisibilityCheck): Promise<boolean>;
  waitForThenClick(selector: ElementSelector, timeout?: number, all?: boolean): Promise<boolean>;
  wait(ms: number): Promise<true>;
  hide(selector: string, method: HideMethod): boolean;
  prehide(selector: string): boolean;
  undoPrehide(): boolean;
  querySingleReplySelector(selector: string, parent?: any): HTMLElement[];
  querySelectorChain(selectors: string[]): HTMLElement[];
  elementSelector(selector: ElementSelector): HTMLElement[];
}

export type RuleBundle = {
  autoconsent: AutoConsentCMPRule[];
  consentomatic: { [name: string]: ConsentOMaticConfig };
};

export type AutoAction = 'optOut' | 'optIn' | null;

export type Config = {
  enabled: boolean;
  autoAction: AutoAction;
  disabledCmps: string[];
  enablePrehide: boolean;
  enableCosmeticRules: boolean;
  detectRetries: number;
  isMainWorld: boolean;
  prehideTimeout: number;
  logs: {
    lifecycle: boolean;
    rulesteps: boolean;
    evals: boolean;
    errors: boolean;
    messages: boolean;
  };
}

export type LifecycleState = 'loading' |
'initialized' |
'waitingForInitResponse' |
'started' |
'nothingDetected' |
'cmpDetected' |
'openPopupDetected' |
'runningOptOut' |
'runningOptIn' |
'optOutSucceeded' |
'optOutFailed' |
'optInSucceeded' |
'optInFailed' |
'done';

export type ConsentState = {
  lifecycle: LifecycleState; // What point in the autoconsent lifecycle this script is at.
  prehideOn: boolean; // If the script is currently hiding preHide elements.
  findCmpAttempts: number; // Number of times we tried to find CMPs in this frame.
  detectedCmps: string[]; // Names of CMP rules where `detectCmp` returned true.
  detectedPopups: string[]; // Names of CMP rules where `detectPopup` returned true.
  selfTest: boolean; // null if no self test was run, otherwise it holds the result of the self test.
}
