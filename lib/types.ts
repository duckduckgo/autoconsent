import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./cmps/consentomatic";
import { AutoConsentCMPRule } from "./rules";

export type MessageSender = (message: ContentScriptMessage) => Promise<void>;

export interface AutoCMP {
  name: string
  hasSelfTest: boolean
  isIntermediate: boolean;
  prehideSelectors?: string[]
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
}
