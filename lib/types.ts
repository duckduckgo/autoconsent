import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./cmps/consentomatic";
import { AutoConsentCMPRule, RunContext } from "./rules";

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
