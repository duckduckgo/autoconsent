import { AutoConsentCMPRule, AutoConsentRuleStep, ElementSelector, RunContext } from './rules';

export type CompactExists = {
    e: number;
};

export type CompactVisible = {
    v: number;
};

export type CompactWaitForThenClick = {
    c: number;
};

export type CompactCMPRuleStep = AutoConsentRuleStep & Partial<CompactExists> & Partial<CompactVisible> & Partial<CompactWaitForThenClick>;

type CompactNullableBoolean = 0 | 1 | 2;

export type CompactCMPRule = [
    string, // name
    CompactNullableBoolean, // cosmetic
    RunContext, // runContext
    number[], // prehideSelectors
    CompactCMPRuleStep[], // detectCMP
    CompactCMPRuleStep[], // detectPopup
    CompactCMPRuleStep[], // optOut
    CompactCMPRuleStep[], // test
    Pick<AutoConsentCMPRule, 'intermediate'>, // extra
];

export type CompactCMPRuleset = {
    v: number;
    s: ElementSelector[];
    r: CompactCMPRule[];
};

function encodeNullableBoolean(value: boolean): CompactNullableBoolean {
    if (value === true) {
        return 1;
    }
    if (value === false) {
        return 0;
    }
    return 2;
}

function decodeNullableBoolean(value: CompactNullableBoolean): boolean | undefined {
    if (value === 1) {
        return true;
    }
    if (value === 0) {
        return false;
    }
    return undefined;
}

export function encodeRules(rules: AutoConsentCMPRule[]): CompactCMPRuleset {
    const strings: string[] = [];

    function replaceStrings(selector: string): number {
        let index = strings.indexOf(selector);
        if (index === -1) {
            index = strings.push(selector) - 1;
        }
        return index;
    }

    function encodeRuleStep(step: AutoConsentRuleStep): CompactCMPRuleStep {
        const clonedStep: CompactCMPRuleStep = { ...step };
        if (clonedStep.exists && typeof clonedStep.exists === 'string') {
            clonedStep.e = replaceStrings(clonedStep.exists);
            delete clonedStep.exists;
        }
        if (clonedStep.visible && typeof clonedStep.visible === 'string') {
            clonedStep.v = replaceStrings(clonedStep.visible);
            delete clonedStep.visible;
        }
        if (clonedStep.waitForThenClick && typeof clonedStep.waitForThenClick === 'string') {
            clonedStep.c = replaceStrings(clonedStep.waitForThenClick);
            delete clonedStep.waitForThenClick;
        }
        return clonedStep;
    }

    const compactRules: CompactCMPRule[] = rules.map((r) => {
        return [
            r.name,
            encodeNullableBoolean(r.cosmetic),
            r.runContext,
            r.prehideSelectors?.map(replaceStrings),
            r.detectCmp.map(encodeRuleStep),
            r.detectPopup.map(encodeRuleStep),
            r.optOut.map(encodeRuleStep),
            r.test?.map(encodeRuleStep),
            {
                intermediate: r.intermediate,
            },
        ];
    });

    return {
        v: 1,
        s: strings,
        r: compactRules,
    };
}

export function decodeRules(encoded: CompactCMPRuleset): AutoConsentCMPRule[] {
    if (encoded.v > 1) {
        throw new Error('Unsupported rule format.');
    }
    function decodeRuleStep(step: CompactCMPRuleStep): AutoConsentRuleStep {
        const clonedStep: CompactCMPRuleStep = { ...step };
        if (clonedStep.e !== undefined) {
            clonedStep.exists = encoded.s[clonedStep.e];
            delete clonedStep.e;
        }
        if (clonedStep.v !== undefined) {
            clonedStep.visible = encoded.s[clonedStep.v];
            delete clonedStep.v;
        }
        if (clonedStep.c !== undefined) {
            clonedStep.waitForThenClick = encoded.s[clonedStep.c];
            delete clonedStep.c;
        }
        return { ...clonedStep };
    }
    return encoded.r.map((rule) => {
        const [name, cosmetic, runContext, prehideSelectors, detectCmp, detectPopup, optOut, test, extra] = rule;
        const optIn: AutoConsentRuleStep[] = [];
        return {
            name,
            cosmetic: decodeNullableBoolean(cosmetic),
            runContext,
            prehideSelectors: prehideSelectors?.map((i) => encoded.s[i].toString()),
            detectCmp: detectCmp.map(decodeRuleStep),
            detectPopup: detectPopup.map(decodeRuleStep),
            optOut: optOut.map(decodeRuleStep),
            optIn,
            test: test?.map(decodeRuleStep),
            ...extra,
        };
    });
}
