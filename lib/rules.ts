import { snippets } from "./eval-snippets"

export type AutoConsentCMPRule = {
  name: string;
  vendorUrl?: string;
  prehideSelectors?: string[];
  runContext?: RunContext;
  intermediate?: boolean;
  cosmetic?: boolean;
  detectCmp: AutoConsentRuleStep[];
  detectPopup: AutoConsentRuleStep[];
  optOut: AutoConsentRuleStep[];
  optIn: AutoConsentRuleStep[];
  openCmp?: AutoConsentRuleStep[];
  test?: AutoConsentRuleStep[];
}

export type RunContext = {
  main?: boolean,
  frame?: boolean,
  urlPattern?: string,
}

export type ElementSelector = string | string[]

export type AutoConsentRuleStep = { optional?: boolean } &
  Partial<ElementExistsRule> &
  Partial<ElementVisibleRule> &
  Partial<EvalRule> &
  Partial<WaitForRule> &
  Partial<WaitForVisibleRule> &
  Partial<ClickRule> &
  Partial<WaitForThenClickRule> &
  Partial<WaitRule> &
  Partial<HideRule> &
  Partial<IfRule> &
  Partial<AnyRule>

export type ElementExistsRule = {
  exists: ElementSelector;
};

export type VisibilityCheck = "any" | "all" | "none";

export type ElementVisibleRule = {
  visible: ElementSelector;
  check?: VisibilityCheck;
};

export type EvalRule = {
  eval: keyof typeof snippets;
};

export type WaitForRule = {
  waitFor: ElementSelector;
  timeout?: number;
};

export type WaitForVisibleRule = {
  waitForVisible: ElementSelector;
  timeout?: number;
  check?: VisibilityCheck;
};

export type ClickRule = {
  click: ElementSelector;
  all?: boolean;
};

export type WaitForThenClickRule = {
  waitForThenClick: ElementSelector;
  timeout?: number;
  all?: boolean;
};

export type WaitRule = {
  wait: number;
};

export type HideMethod = 'display' | 'opacity';

export type HideRule = {
  hide: string;
  method?: HideMethod;
};

export type IfRule = {
  if: Partial<ElementExistsRule> & Partial<ElementVisibleRule>;
  then: AutoConsentRuleStep[];
  else?: AutoConsentRuleStep[];
};

export type AnyRule = {
  any: AutoConsentRuleStep[];
}
