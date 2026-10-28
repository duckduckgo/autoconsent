/**
 * Text-only heuristic classification: popup text and button labels in, classifications out.
 * Must not depend on DOM APIs, so that it can be used from Node (e.g. by tracker-radar-collector).
 */
import {
    ACCEPT_PATTERNS,
    ACKNOWLEDGE_PATTERNS,
    BUTTON_NEVER_MATCH_PATTERNS,
    ContextNegative,
    DETECT_CONTEXT_NEGATIVES,
    DETECT_PATTERNS,
    DetectPattern,
    HeuristicInput,
    TextTest,
    REJECT_PATTERNS,
    SETTINGS_PATTERNS,
} from './heuristic-patterns';
import { DETECT_LITERAL_INDEX, DETECT_PATTERN_LITERALS } from './heuristic-literals';
import { literalIndex, literalIndexFrom } from './heuristic-prefilter';
export * from './heuristic-patterns';

export type ButtonRegexClassification = 'reject' | 'settings' | 'accept' | 'acknowledge' | 'other';
export type PopupClassification = 'none' | 'reject' | 'tier1' | 'tier2';

export type ClassifiableButton = {
    text: string;
    regexClassification?: ButtonRegexClassification;
};

const TEXT_LIMIT = 100000;
const DEFAULT_WINDOW = 150;

type CompiledNegative = ContextNegative & { hits: (context: string) => boolean; applies: Set<string> | null };
type CompiledPattern = { id: string; pattern: RegExp; global: RegExp; input?: HeuristicInput; literals: string[] };
type CompiledPatterns = { detect: CompiledPattern[]; literals: ReturnType<typeof literalIndex> };

// a regex without the global and sticky flags, so `test` keeps no state between calls
const stateless = (re: RegExp) => new RegExp(re.source, re.flags.replace(/[gy]/g, ''));
// a TextTest as a predicate
function toPredicate(test: TextTest): (text: string) => boolean {
    if (typeof test === 'function') {
        return test;
    }
    const re = stateless(test);
    return (text) => re.test(text);
}

const compiledPatterns = new WeakMap<DetectPattern[], CompiledPatterns>();
const compiledNegatives = new WeakMap<ContextNegative[], CompiledNegative[]>();

function compilePatterns(detectPatterns: DetectPattern[]): CompiledPatterns {
    let compiled = compiledPatterns.get(detectPatterns);
    if (!compiled) {
        const detect = detectPatterns.map((p) => {
            const { pattern, input } = p instanceof RegExp ? { pattern: p, input: undefined } : p;
            const global = pattern.flags.includes('g') ? pattern : new RegExp(pattern.source, `${pattern.flags}g`);
            const id = pattern.toString();
            // prefilter literals come from the generated table only; a pattern without an entry is never skipped
            return { id, pattern, global, input, literals: DETECT_PATTERN_LITERALS[id] ?? [] };
        });
        const literals =
            detectPatterns === DETECT_PATTERNS ? literalIndexFrom(DETECT_LITERAL_INDEX) : literalIndex(detect.flatMap((d) => d.literals));
        compiled = { detect, literals };
        compiledPatterns.set(detectPatterns, compiled);
    }
    return compiled;
}

function compileNegatives(negatives: ContextNegative[]): CompiledNegative[] {
    let compiled = compiledNegatives.get(negatives);
    if (!compiled) {
        compiled = negatives.map((n) => {
            const pattern = n.pattern ? stateless(n.pattern) : null;
            const unless = n.unless ? toPredicate(n.unless) : null;
            return {
                ...n,
                hits: (context: string) => (!pattern || pattern.test(context)) && !(unless && unless(context)),
                applies: n.appliesTo ? new Set(n.appliesTo.map(String)) : null,
            };
        });
        compiledNegatives.set(negatives, compiled);
    }
    return compiled;
}

/** The text around a match that a context negative is tested on. */
export function negativeContext(text: string, start: number, end: number, negative: ContextNegative): string {
    if (negative.whole) {
        return text;
    }
    if (negative.lines === undefined) {
        const w = negative.window ?? DEFAULT_WINDOW;
        return text.slice(Math.max(0, start - w), end + w);
    }
    const lineEnd = (i: number) => {
        const next = text.indexOf('\n', i);
        return next === -1 ? text.length : next;
    };
    const [before, after] = Array.isArray(negative.lines) ? negative.lines : [negative.lines, negative.lines];
    let from = start > 0 ? text.lastIndexOf('\n', start - 1) + 1 : 0;
    let to = lineEnd(end);
    for (let i = 0; i < before; i++) {
        from = from >= 2 ? text.lastIndexOf('\n', from - 2) + 1 : 0;
    }
    for (let i = 0; i < after; i++) {
        to = to < text.length ? lineEnd(to + 1) : to;
    }
    return text.slice(from, to);
}

/**
 * Matches the detect patterns against a text. `input` says what the text is: a popup element's text or a whole page's;
 * patterns and context negatives scoped to the other input are skipped (without it, only unscoped ones apply). A
 * pattern counts if one of its matches survives the context negatives; `suppressed` lists those that didn't.
 * `patterns` and `negatives` replace the built-in lists.
 */
export function checkHeuristicPatterns(allText: string, input?: HeuristicInput, options: HeuristicPatternOptions = {}) {
    return matchHeuristicPatterns(allText, input, options, false);
}

// same result as checking checkHeuristicPatterns() for patterns, but stops at the first match
export function hasHeuristicPatterns(allText: string, input?: HeuristicInput, options: HeuristicPatternOptions = {}): boolean {
    return matchHeuristicPatterns(allText, input, options, true).patterns.length > 0;
}

export type HeuristicPatternOptions = { patterns?: DetectPattern[]; negatives?: ContextNegative[] };

function matchHeuristicPatterns(
    allText: string,
    input: HeuristicInput | undefined,
    { patterns: detectPatterns = DETECT_PATTERNS, negatives = DETECT_CONTEXT_NEGATIVES }: HeuristicPatternOptions,
    firstOnly: boolean,
) {
    allText = (allText || '').slice(0, TEXT_LIMIT);
    const patterns = [];
    const snippets = [];
    const suppressed: { pattern: string; negative: string }[] = [];
    const compiled = compilePatterns(detectPatterns);
    const applicable = compileNegatives(negatives).filter((n) => !n.input || n.input === input);
    let present: Set<string> | undefined;
    // a whole-text negative gives the same answer for every match, so it is tested once
    const wholeHits = new Map<CompiledNegative, boolean>();
    const hitsAt = (n: CompiledNegative, start: number, end: number) => {
        if (!n.whole) {
            return n.hits(negativeContext(allText, start, end, n));
        }
        let hit = wholeHits.get(n);
        if (hit === undefined) {
            hit = n.hits(allText);
            wholeHits.set(n, hit);
        }
        return hit;
    };

    for (const d of compiled.detect) {
        if (d.input && d.input !== input) {
            continue;
        }
        if (d.literals.length) {
            const found = (present ??= compiled.literals.present(allText.toLowerCase()));
            if (!d.literals.some((l) => found.has(l))) {
                continue;
            }
        }
        const matches = allText.match(d.pattern);
        if (!matches) {
            continue;
        }
        const own = applicable.filter((n) => !n.applies || n.applies.has(d.id));
        if (own.length) {
            const dropped = new Set<string>();
            let kept = false;
            // matchAll clones the regex, so the shared global copy keeps no state
            for (const m of allText.matchAll(d.global)) {
                const start = m.index ?? 0;
                const hit = own.find((n) => hitsAt(n, start, start + m[0].length));
                if (!hit) {
                    kept = true;
                    break;
                }
                dropped.add(hit.name);
            }
            if (!kept) {
                dropped.forEach((negative) => suppressed.push({ pattern: d.id, negative }));
                continue;
            }
        }
        patterns.push(d.id);
        // When a non-global regex has capture groups, `String.prototype.match`
        // returns undefined entries for optional groups that did not match.
        for (const m of matches) {
            if (typeof m === 'string') {
                snippets.push(m.substring(0, 200));
            }
        }
        if (firstOnly) {
            break;
        }
    }
    return { patterns, snippets, suppressed };
}

export function classifyButtons(buttons: ClassifiableButton[]) {
    for (const button of buttons) {
        button.regexClassification = classifyButtonTextRegex(button.text);
    }
}

/**
 * Names of the whole-text context negatives that exclude a text as this input, whether or not detect patterns match it:
 * why a popup is not a consent popup.
 */
export function excludedBy(text: string, input?: HeuristicInput, negatives: ContextNegative[] = DETECT_CONTEXT_NEGATIVES): string[] {
    const truncated = (text || '').slice(0, TEXT_LIMIT);
    return compileNegatives(negatives)
        .filter((n) => n.whole && (!n.input || n.input === input) && n.hits(truncated))
        .map((n) => n.name);
}

export function classifyPopup(buttons: ClassifiableButton[]): PopupClassification {
    const { reject, settings, accept, acknowledge } = buttons.reduce(
        (acc, button) => {
            if (button.regexClassification && button.regexClassification !== 'other') {
                acc[button.regexClassification]++;
            }
            return acc;
        },
        { reject: 0, settings: 0, accept: 0, acknowledge: 0 },
    );
    if (reject > 0) {
        return 'reject';
    }
    if (settings > 0) {
        return 'none';
    }
    if (acknowledge > 0) {
        return 'tier1';
    }
    if (accept > 0) {
        return accept === 1 ? 'tier2' : 'none';
    }
    return 'none';
}

/**
 * @param {string} buttonText
 * @param {Array<string|RegExp>} matchPatterns
 * @param {Array<string|RegExp>} neverMatchPatterns
 * @returns {boolean}
 */
function testButtonMatches(buttonText: string, matchPatterns: (string | RegExp)[], neverMatchPatterns: (string | RegExp)[]): boolean {
    if (!buttonText) {
        return false;
    }
    const cleanedButtonText = cleanButtonText(buttonText);
    return (
        !neverMatchPatterns.some((p) => (p instanceof RegExp && p.test(cleanedButtonText)) || p === cleanedButtonText) &&
        matchPatterns.some((p) => (p instanceof RegExp && p.test(cleanedButtonText)) || p === cleanedButtonText)
    );
}

export function cleanButtonText(buttonText: string): string {
    // lowercase
    let result = buttonText.toLowerCase();
    // remove special characters
    result = result.replace(/[“”"'/#&[\]→✕×⟩❯><✗×‘’›«»]+/g, '');
    // remove emojis
    result = result.replace(
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u2600-\u26FF\u2700-\u27BF\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu,
        '',
    );
    // remove newlines
    result = result.replace(/\n+/g, ' ');
    // remove multiple spaces
    result = result.replace(/\s+/g, ' ');
    // strip whitespace around the text
    result = result.trim();
    return result;
}

export function classifyButtonTextRegex(buttonText: string): ButtonRegexClassification {
    if (testButtonMatches(buttonText, REJECT_PATTERNS, BUTTON_NEVER_MATCH_PATTERNS)) {
        return 'reject';
    }
    if (testButtonMatches(buttonText, SETTINGS_PATTERNS, BUTTON_NEVER_MATCH_PATTERNS)) {
        return 'settings';
    }
    if (testButtonMatches(buttonText, ACCEPT_PATTERNS, BUTTON_NEVER_MATCH_PATTERNS)) {
        return 'accept';
    }
    if (testButtonMatches(buttonText, ACKNOWLEDGE_PATTERNS, BUTTON_NEVER_MATCH_PATTERNS)) {
        return 'acknowledge';
    }
    return 'other';
}
