
export type AutoConsentCMPRule = {
  name: string
  popupSelector?: string
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
  Partial<GotoUrlRule> &
  Partial<HideRule> &
  Partial<WaitForFrameRule>;

type ElementExistsRule = {
  exists: string;
};

type ElementVisibleRule = {
  visible: string;
  check?: "any" | "all" | "none";
};

type EvalRule = {
  eval: string;
};

type WaitForRule = {
  waitFor: string;
  timeout?: number;
};

type ClickRule = {
  click: string;
  all?: boolean;
};

type WaitForThenClickRule = {
  waitForThenClick: string;
  timeout?: number;
};

type WaitRule = {
  wait: number;
};

type UrlRule = {
  url: string;
};

type GotoUrlRule = {
  goto: string;
};

type HideRule = {
  hide: string[];
};

type WaitForFrameRule = {
  waitForFrame: true
};
