/* eslint-disable no-use-before-define */
import { snippets } from './eval-snippets';

export const SUPPORTED_RULE_STEP_VERSION = 1;

export type AutoConsentCMPRule = {
    readonly name: string;
    /**
     * @deprecated Use `_metadata.vendorUrl` instead.
     */
    readonly vendorUrl?: string;
    readonly prehideSelectors?: string[];
    readonly runContext?: RunContext;
    readonly intermediate?: boolean;
    readonly cosmetic?: boolean;
    readonly detectCmp: AutoConsentRuleStep[];
    readonly detectPopup: AutoConsentRuleStep[];
    readonly optOut: AutoConsentRuleStep[];
    readonly optIn: AutoConsentRuleStep[];
    readonly openCmp?: AutoConsentRuleStep[];
    readonly test?: AutoConsentRuleStep[];
    readonly comment?: string;
    readonly minimumRuleStepVersion?: number;
    readonly _metadata?: {
        readonly manuallyReviewUpdates?: boolean;
        readonly vendorUrl?: string;
    };
};

export type RunContext = {
    main?: boolean;
    frame?: boolean;
    urlPattern?: string;
};

export type ElementSelector = string | string[];

export type AutoConsentRuleStep = { optional?: boolean; comment?: string } & Partial<ElementExistsRule> &
    Partial<ElementVisibleRule> &
    Partial<EvalRule> &
    Partial<WaitForRule> &
    Partial<WaitForVisibleRule> &
    Partial<ClickRule> &
    Partial<WaitForThenClickRule> &
    Partial<WaitRule> &
    Partial<HideRule> &
    Partial<IfRule> &
    Partial<AnyRule> &
    Partial<NegatedRule> &
    Partial<CookieContainsRule>;

export type NegatedRule = {
    negated: boolean;
};

export type CookieContainsRule = {
    cookieContains: string;
};

export type ElementExistsRule = {
    exists: ElementSelector;
};

export type VisibilityCheck = 'any' | 'all' | 'none';

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
};
