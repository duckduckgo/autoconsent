import { ContentScriptMessage } from "./messages";
import { ConsentOMaticConfig } from "./consentomatic";
import { AutoConsentCMPRule } from "./rules";

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
}

export type RuleBundle = {
  autoconsent: AutoConsentCMPRule[];
  consentomatic: { [name: string]: ConsentOMaticConfig };
};

export type AutoAction = 'optOut' | 'optIn' | null;
