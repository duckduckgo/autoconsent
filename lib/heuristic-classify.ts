/**
 * Text-only heuristic classification: popup text and button labels in, classifications out.
 * Must not depend on DOM APIs, so that it can be used from Node (e.g. by tracker-radar-collector).
 */
import {
    ACCEPT_PATTERNS,
    ACKNOWLEDGE_PATTERNS,
    BUTTON_NEVER_MATCH_PATTERNS,
    DETECT_NEVER_MATCH_PATTERNS,
    DETECT_PATTERNS,
    REJECT_PATTERNS,
    SETTINGS_PATTERNS,
} from './heuristic-patterns';
export * from './heuristic-patterns';

export type ButtonRegexClassification = 'reject' | 'settings' | 'accept' | 'acknowledge' | 'other';
export type PopupClassification = 'none' | 'reject' | 'tier1' | 'tier2';

export type ClassifiableButton = {
    text: string;
    regexClassification?: ButtonRegexClassification;
};

const TEXT_LIMIT = 100000;

export function checkHeuristicPatterns(allText: string, detectPatterns = DETECT_PATTERNS) {
    allText = allText.slice(0, TEXT_LIMIT);
    const patterns = [];
    const snippets = [];

    for (const p of detectPatterns) {
        const matches = allText?.match(p);
        if (matches) {
            patterns.push(p.toString());
            // When a non-global regex has capture groups, `String.prototype.match`
            // returns undefined entries for optional groups that did not match.
            for (const m of matches) {
                if (typeof m === 'string') {
                    snippets.push(m.substring(0, 200));
                }
            }
        }
    }
    return { patterns, snippets };
}

export function classifyButtons(buttons: ClassifiableButton[]) {
    for (const button of buttons) {
        button.regexClassification = classifyButtonTextRegex(button.text);
    }
}

export function isExcludedPopup(popupText: string, excludePatterns = DETECT_NEVER_MATCH_PATTERNS): boolean {
    if (!popupText) {
        return false;
    }
    const truncated = popupText.slice(0, TEXT_LIMIT);
    return excludePatterns.some((p) => p.test(truncated));
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
