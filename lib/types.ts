import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./cmps/consentomatic";
import { AutoConsentCMPRule, RunContext } from "./rules";

export type MessageSender = (message: ContentScriptMessage) => Promise<void>;

export interface AutoCMP {
  name: string
  hasSelfTest: boolean
  isIntermediate: boolean;
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
  detectRetries: number;
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
'optOutSuceeded' |
'optOutFailed' |
'optInSuceeded' |
'optInFailed' |
'done';

export type ConsentState = {
  lifecycle: LifecycleState;
  prehideOn: boolean;
  findCmpAttempts: number;
  detectedCmps: string[],
  detectedPopups: string[],
}
  