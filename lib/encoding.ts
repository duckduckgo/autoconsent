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

export type IndexedCMPRuleset = CompactCMPRuleset & {
    index: {
        genericRuleRange: [number, number]; // [startIndex, endIndex] of rules that are generic
        frameRuleRange: [number, number]; // [startIndex, endIndex] of rules that run in frames
        specificRuleRange: [number, number]; // [startIndex, endIndex] of rules that are specific
        genericStringEnd: number; // end index of strings that are used by generic rules
        frameStringEnd: number; // end index of strings that are used by frame rules
    };
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

    // New array of undefined, ready to be filled.
    const strings = new Array(usedStrings.size).fill(undefined);
    // copy existing values to the same, capping to the max array length
    existingStrings.slice(0, usedStrings.size).forEach((s, i) => {
        if (usedStrings.has(s)) {
            strings[i] = s;
        }
    });
    // copy remaining strings into empty slots. This will also place any existing strings whose previous indices are out of the bounds of the new array.
    usedStrings.forEach((s) => {
        if (strings.indexOf(s) === -1) {
            const nextFreeSlot = strings.indexOf(undefined); // find next undefined value
            strings[nextFreeSlot] = s;
        }
    });
    return strings;
}

export function encodeRules(rules: AutoConsentCMPRule[], existingCompactRules: CompactCMPRuleset | null): IndexedCMPRuleset {
    rules.sort((a, b) => {
        const isGeneric = (r: AutoConsentCMPRule) => !r.runContext?.urlPattern || r.runContext.urlPattern === '';
        const isFrame = (r: AutoConsentCMPRule) => r.runContext?.frame === true;
        if (isGeneric(a) && !isGeneric(b)) {
            return -1;
        }
        if (!isGeneric(a) && isGeneric(b)) {
            return 1;
        }
        // both generic, sort frames to the end
        if (isGeneric(a) && isGeneric(b)) {
            if (isFrame(a) && !isFrame(b)) {
                return 1;
            }
            if (!isFrame(a) && isFrame(b)) {
                return -1;
            }
        }
        // both specific, sort frames to the front
        if (!isGeneric(a) && !isGeneric(b)) {
            if (isFrame(a) && !isFrame(b)) {
                return -1;
            }
            if (!isFrame(a) && isFrame(b)) {
                return 1;
            }
        }
        // all else being equal, sort by name
        return a.name.localeCompare(b.name);
    });

    const genericRuleEnd = rules.findIndex((r) => {
        return r.runContext?.urlPattern && r.runContext.urlPattern !== '';
    });
    const frameRuleStart = rules.findIndex((r) => {
        return r.runContext?.frame === true;
    });
    const frameRuleEnd = rules.findIndex((r, i) => {
        return (!r.runContext || !r.runContext?.frame) && i >= frameRuleStart;
    });

    const genericStrings = buildStrings(existingCompactRules?.s || [], rules.slice(0, genericRuleEnd));
    const frameStrings = buildStrings(existingCompactRules?.s || [], rules.slice(0, frameRuleEnd));
    const strings = buildStrings(frameStrings || [], rules);

    function encodeRuleStep(step: AutoConsentRuleStep): CompactCMPRuleStep {
        const clonedStep: CompactCMPRuleStep = { ...step };
        if (step.comment) {
            delete clonedStep.comment; // comments are not encoded
        }
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
        index: {
            genericRuleRange: [0, genericRuleEnd],
            frameRuleRange: [frameRuleStart, frameRuleEnd],
            specificRuleRange: [genericRuleEnd, compactRules.length],
            genericStringEnd: genericStrings.length,
            frameStringEnd: frameStrings.length,
        },
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

export function deduplicateRules(rules: AutoConsentCMPRule[]) {
    const rulesByHash = new Map<string, AutoConsentCMPRule[]>();
    const dedupedRules: AutoConsentCMPRule[] = [];
    const dedupHash = (rule: AutoConsentCMPRule) => {
        if (rule.intermediate || !rule.runContext?.urlPattern) {
            return null; // do not deduplicate intermediate or generic rules
        }
        return JSON.stringify({
            mainFrame: rule.runContext?.main,
            frame: rule.runContext?.frame,
            detectCmp: rule.detectCmp,
            detectPopup: rule.detectPopup,
            optOut: rule.optOut,
            optIn: rule.optIn,
            prehideSelectors: rule.prehideSelectors,
            cosmetic: rule.cosmetic,
        });
    };
    rules.forEach((rule) => {
        const hash = dedupHash(rule);
        if (hash && typeof hash === 'string') {
            const matchingRules = rulesByHash.get(hash) || [];
            matchingRules.push(rule);
            rulesByHash.set(hash, matchingRules);
        } else {
            dedupedRules.push(rule);
        }
    });
    rulesByHash.forEach((rules, hash) => {
        if (rules.length === 1) {
            dedupedRules.push(rules[0]);
            return;
        }
        dedupedRules.push({
            name: `${rules[0].name}_+${rules.length - 1}`,
            _metadata: {
                deduplicatedFrom: rules.map((r) => r.name),
            },
            runContext: {
                urlPattern: rules.map((rule) => rule.runContext!.urlPattern).join('|'),
                main: rules[0].runContext?.main,
                frame: rules[0].runContext?.frame,
            },
            prehideSelectors: rules[0].prehideSelectors,
            detectCmp: rules[0].detectCmp,
            detectPopup: rules[0].detectPopup,
            optOut: rules[0].optOut,
            optIn: rules[0].optIn,
            test: rules[0].test,
            cosmetic: rules[0].cosmetic,
        } as AutoConsentCMPRule);
    });
    return dedupedRules;
}

export function filterCompactRules(rules: IndexedCMPRuleset, context: { url: string; mainFrame: boolean }): CompactCMPRuleset {
    const { v, s, r, index } = rules;
    const { url, mainFrame } = context;

    const clearUnusedStrings = (ruleset: CompactCMPRuleset, ignoreBeforeIndex = 0) => {
        const { v, s, r } = ruleset;
        const usedStringIds = new Set<number>();
        function addStringIdsFromRuleSteps(steps: CompactCMPRuleStep[]) {
            steps.forEach((step) => {
                for (const [, shortKey] of compactedRuleSteps) {
                    if (step[shortKey] !== undefined) {
                        usedStringIds.add(step[shortKey] as number);
                    }
                }
            });
        }
        ruleset.r.forEach((rule) => {
            addStringIdsFromRuleSteps(rule[6]);
            addStringIdsFromRuleSteps(rule[7]);
            addStringIdsFromRuleSteps(rule[8]);
            addStringIdsFromRuleSteps(rule[9]);
            rule[5].forEach((id) => usedStringIds.add(id));
        });
        return {
            v,
            r,
            s: s.slice(0, Math.max(...usedStringIds) + 1).map((str, idx) => {
                if (idx < ignoreBeforeIndex || usedStringIds.has(idx)) {
                    return str;
                }
                return '';
            }),
        };
    };

    const shouldRunInContext = (rule: CompactCMPRule): boolean => {
        const runContext = rule[4];
        if (mainFrame && decodeNullableBoolean((Math.floor(runContext / 10) % 10) as CompactNullableBoolean) === false) {
            return false;
        }
        if (!mainFrame && decodeNullableBoolean((runContext % 10) as CompactNullableBoolean) === false) {
            return false;
        }
        const urlPattern = rule[3];
        if (urlPattern && urlPattern !== '' && url.match(urlPattern) === null) {
            return false;
        }
        return true;
    };

    if (!mainFrame) {
        return clearUnusedStrings({
            v,
            s: s.slice(0, index.frameStringEnd),
            r: r.slice(index.frameRuleRange[0], index.frameRuleRange[1]).filter(shouldRunInContext),
        });
    }
    const genericRules = r.slice(index.genericRuleRange[0], index.genericRuleRange[1]);
    const specificRules = r.slice(index.specificRuleRange[0], index.specificRuleRange[1]).filter(shouldRunInContext);

    if (specificRules.length > 0) {
        return clearUnusedStrings({
            v,
            s,
            r: [...genericRules, ...specificRules],
        });
    }
    return {
        v,
        s: s.slice(0, index.genericStringEnd),
        r: genericRules,
    };
}
