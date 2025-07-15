import { AutoConsentCMPRule, AutoConsentRuleStep, RunContext, SUPPORTED_RULE_STEP_VERSION } from './rules';

export type CompactRuleStep = {
    e: number; // exists
    v: number; // visible
    c: number; // waitForThenClick
    k: number; // click
    w: number; // waitFor
    wv: number; // waitForVisible
    h: number; // hide
    cc: number; // cookieContains
};

export type CompactCMPRuleStep = AutoConsentRuleStep & Partial<CompactRuleStep>;
type CompactableRuleStepKey =
    | 'exists'
    | 'visible'
    | 'waitForThenClick'
    | 'click'
    | 'waitFor'
    | 'waitForVisible'
    | 'hide'
    | 'cookieContains';
type CompactNullableBoolean = 0 | 1 | 2;

export type CompactCMPRule = [
    number, // minimumRuleStepVersion
    string, // name
    CompactNullableBoolean, // cosmetic
    string, // runContext.urlPattern
    number, // runContext.main + runContext.frame
    number[], // prehideSelectors
    CompactCMPRuleStep[], // detectCMP
    CompactCMPRuleStep[], // detectPopup
    CompactCMPRuleStep[], // optOut
    CompactCMPRuleStep[], // test
    Pick<AutoConsentCMPRule, 'intermediate'>, // extra
];

export type CompactCMPRuleset = {
    v: number;
    s: string[];
    r: CompactCMPRule[];
};

/**
 * Mapping of long to short key for rule step keys that should be shortened, with their value
 * replaced by an array offset.
 */
const compactedRuleSteps: [CompactableRuleStepKey, keyof CompactRuleStep][] = [
    ['exists', 'e'],
    ['visible', 'v'],
    ['waitForThenClick', 'c'],
    ['click', 'k'],
    ['waitFor', 'w'],
    ['waitForVisible', 'wv'],
    ['hide', 'h'],
    ['cookieContains', 'cc'],
];

function encodeNullableBoolean(value: boolean | undefined): CompactNullableBoolean {
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

/**
 * Builds a map of strings to their indices, preserving the indices of existing strings, when possible.
 * @param existingStrings - The strings array from the previous version of the ruleset.
 * @param rules - The rules to collect strings from.
 * @returns A new strings array.
 */
export function buildStrings(existingStrings: string[], rules: AutoConsentCMPRule[]): string[] {
    // First pass: collect all strings that will be used
    const usedStrings = new Set<string>();

    function collectStrings(step: AutoConsentRuleStep) {
        for (const [longKey] of compactedRuleSteps) {
            if (step[longKey] && typeof step[longKey] === 'string') {
                usedStrings.add(step[longKey]);
            }
        }
        if (step.if) {
            collectStrings(step.if);
            step.then?.forEach(collectStrings);
            step.else?.forEach(collectStrings);
        }
        if (step.any) {
            step.any.forEach(collectStrings);
        }
    }

    // Collect all used strings from all rules
    rules.forEach((rule) => {
        (rule.prehideSelectors || []).forEach((selector) => usedStrings.add(selector));
        rule.detectCmp.forEach(collectStrings);
        rule.detectPopup.forEach(collectStrings);
        rule.optOut.forEach(collectStrings);
        (rule.test || []).forEach(collectStrings);
    });

    // Separate existing strings that are still used vs new strings
    const existingUsedStrings: Array<{ str: string; originalIndex: number }> = [];
    const newStrings: string[] = [];

    usedStrings.forEach((str) => {
        const existingIndex = existingStrings.indexOf(str);
        if (existingIndex !== -1) {
            existingUsedStrings.push({ str, originalIndex: existingIndex });
        } else {
            newStrings.push(str);
        }
    });

    // Create compact array, trying to preserve original indices
    const finalSize = usedStrings.size;
    const strings: string[] = new Array(finalSize);
    const stringIndexMap = new Map<string, number>();
    const usedIndices = new Set<number>();

    // First, place existing strings at their original indices if possible
    existingUsedStrings.forEach(({ str, originalIndex }) => {
        if (originalIndex < finalSize && !usedIndices.has(originalIndex)) {
            strings[originalIndex] = str;
            stringIndexMap.set(str, originalIndex);
            usedIndices.add(originalIndex);
        }
    });

    // Then place remaining existing strings that couldn't keep their original indices
    const remainingExistingStrings = existingUsedStrings.filter(({ str }) => !stringIndexMap.has(str));

    // Finally, fill remaining slots with new strings and displaced existing strings
    const remainingStrings = [...newStrings, ...remainingExistingStrings.map(({ str }) => str)];
    let remainingIndex = 0;

    for (let i = 0; i < finalSize; i++) {
        if (!usedIndices.has(i)) {
            const str = remainingStrings[remainingIndex++];
            strings[i] = str;
            stringIndexMap.set(str, i);
        }
    }

    return strings;
}

export function encodeRules(rules: AutoConsentCMPRule[], existingCompactRules: CompactCMPRuleset | null): CompactCMPRuleset {
    const strings = buildStrings(existingCompactRules?.s || [], rules);

    function encodeRuleStep(step: AutoConsentRuleStep): CompactCMPRuleStep {
        const clonedStep: CompactCMPRuleStep = { ...step };
        for (const [longKey, shortKey] of compactedRuleSteps) {
            if (clonedStep[longKey] && typeof clonedStep[longKey] === 'string') {
                clonedStep[shortKey] = strings.indexOf(clonedStep[longKey]);
                delete clonedStep[longKey];
            }
        }
        if (step.if) {
            clonedStep.if = encodeRuleStep(step.if);
            clonedStep.then = step.then && step.then.map(encodeRuleStep);
            if (step.else) {
                clonedStep.else = step.else.map(encodeRuleStep);
            }
        }
        if (step.any) {
            clonedStep.any = step.any.map(encodeRuleStep);
        }
        return clonedStep;
    }

    const compactRules: CompactCMPRule[] = rules.map((r) => {
        return [
            r.minimumRuleStepVersion || 1,
            r.name,
            encodeNullableBoolean(r.cosmetic),
            r.runContext?.urlPattern || '',
            parseInt(`${encodeNullableBoolean(r.runContext?.main)}${encodeNullableBoolean(r.runContext?.frame)}`),
            (r.prehideSelectors || []).map((s) => strings.indexOf(s)),
            r.detectCmp.map(encodeRuleStep),
            r.detectPopup.map(encodeRuleStep),
            r.optOut.map(encodeRuleStep),
            (r.test || []).map(encodeRuleStep),
            r.intermediate !== undefined ? { intermediate: r.intermediate } : {},
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
    return encoded.r.filter((r) => r[0] <= SUPPORTED_RULE_STEP_VERSION).map((rule) => new CompactedCMPRule(rule, encoded.s));
}

class CompactedCMPRule implements AutoConsentCMPRule {
    r: CompactCMPRule;
    s: string[];
    intermediate = false;
    optIn = [];

    constructor(rule: CompactCMPRule, strings: string[]) {
        this.r = rule;
        this.s = strings;
        if (this.r[10] && this.r[10].intermediate) {
            this.intermediate = this.r[10].intermediate;
        }
    }

    _decodeRuleStep(step: CompactCMPRuleStep): AutoConsentRuleStep {
        const clonedStep: CompactCMPRuleStep = { ...step };
        const decodeRuleStep = this._decodeRuleStep.bind(this);
        for (const [longKey, shortKey] of compactedRuleSteps) {
            if (clonedStep[shortKey] !== undefined) {
                clonedStep[longKey] = this.s[clonedStep[shortKey]];
                delete clonedStep[shortKey];
            }
        }
        if (step.if) {
            clonedStep.if = decodeRuleStep(step.if);
            clonedStep.then = step.then && step.then.map(decodeRuleStep);
            if (step.else) {
                clonedStep.else = step.else.map(decodeRuleStep);
            }
        }
        if (step.any) {
            clonedStep.any = step.any.map(decodeRuleStep);
        }
        return { ...clonedStep };
    }

    get name() {
        return this.r[1];
    }

    get cosmetic() {
        return decodeNullableBoolean(this.r[2]);
    }

    get runContext() {
        const runContext: RunContext = {};
        const urlPattern = this.r[3];
        const mainFrame = this.r[4];
        const runInMainFrame = decodeNullableBoolean((Math.floor(mainFrame / 10) % 10) as CompactNullableBoolean);
        const runInSubFrame = decodeNullableBoolean((mainFrame % 10) as CompactNullableBoolean);
        if (runInMainFrame !== undefined) {
            runContext.main = runInMainFrame;
        }
        if (runInSubFrame !== undefined) {
            runContext.frame = runInSubFrame;
        }
        if (urlPattern !== '') {
            runContext.urlPattern = urlPattern;
        }
        return runContext;
    }

    get prehideSelectors() {
        return this.r[5].map((i) => this.s[i].toString());
    }

    get detectCmp() {
        return this.r[6].map(this._decodeRuleStep.bind(this));
    }

    get detectPopup() {
        return this.r[7].map(this._decodeRuleStep.bind(this));
    }

    get optOut() {
        return this.r[8].map(this._decodeRuleStep.bind(this));
    }

    get test() {
        return this.r[9].map(this._decodeRuleStep.bind(this));
    }
}
