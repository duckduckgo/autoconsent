export type AutoConsentCMPRule = {
  name: string
  prehideSelectors?: string[]
  detectCmp: AutoConsentRuleStep[]
  detectPopup: AutoConsentRuleStep[]
  frame?: string
  optOut: AutoConsentRuleStep[]
  optIn: AutoConsentRuleStep[]
  openCmp?: AutoConsentRuleStep[]
  test?: AutoConsentRuleStep[]
}

export type AutoConsentRuleStep = { frame?: boolean; optional?: boolean } & Partial<
  ElementExistsRule
> &
  Partial<ElementVisibleRule> &
  Partial<EvalRule> &
  Partial<WaitForRule> &
  Partial<ClickRule> &
  Partial<WaitForThenClickRule> &
  Partial<WaitRule> &
  Partial<UrlRule> &
  Partial<HideRule>;

export type ElementExistsRule = {
  exists: string;
};

export type ElementVisibleRule = {
  visible: string;
  check?: "any" | "all" | "none";
};

export type EvalRule = {
  eval: string;
};

export type WaitForRule = {
  waitFor: string;
  timeout?: number;
};

export type ClickRule = {
  click: string;
  all?: boolean;
};

export type WaitForThenClickRule = {
  waitForThenClick: string;
  timeout?: number;
};

export type WaitRule = {
  wait: number;
};

export type UrlRule = {
  url: string;
};

export type HideMethod = 'display' | 'opacity';

export type HideRule = {
  hide: string[];
  method?: HideMethod;
};
