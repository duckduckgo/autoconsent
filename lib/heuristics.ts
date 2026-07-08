import {
    ACCEPT_PATTERNS,
    ACKNOWLEDGE_PATTERNS,
    DETECT_PATTERNS,
    NEVER_MATCH_PATTERNS,
    REJECT_PATTERNS,
    SETTINGS_PATTERNS,
} from './heuristic-patterns';
import { ButtonData, ButtonRegexClassification, HeuristicLevel, PopupClassification, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';
const TEXT_LIMIT = 100000;
const POPUP_SEARCH_MAX_TIME = 100;

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

export function getActionablePopups(mode: HeuristicLevel = 'reject', timeout = POPUP_SEARCH_MAX_TIME): PopupData[] {
    const acceptedLevels: PopupClassification[] =
        mode === 'tier2' ? ['reject', 'tier1', 'tier2'] : mode === 'tier1' ? ['reject', 'tier1'] : ['reject'];
    if (acceptedLevels.length === 0) {
        return [];
    }
    const popups = getPotentialPopups(timeout);
    const result = popups.reduce((acc, popup) => {
        const popupText = popup.text?.trim();
        if (popupText) {
            const { patterns } = checkHeuristicPatterns(popupText);
            if (patterns.length > 0) {
                classifyButtons(popup.buttons);
                popup.regexClassification = classifyPopup(popup.buttons);
                acc.push({
                    ...popup,
                });
            }
        }
        return acc;
    }, [] as PopupData[]);
    // popups filtered by mode and sorted so a popup with reject will always win.
    return result
        .filter((popup) => popup.regexClassification !== undefined && acceptedLevels.includes(popup.regexClassification))
        .sort((a, b) => ((a.regexClassification ?? '') > (b.regexClassification ?? '') ? 1 : -1));
}

export function classifyButtons(buttons: ButtonData[]) {
    for (const button of buttons) {
        button.regexClassification = classifyButtonTextRegex(button.text);
    }
}

function classifyPopup(buttons: ButtonData[]): PopupClassification {
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
    if (testButtonMatches(buttonText, REJECT_PATTERNS, NEVER_MATCH_PATTERNS)) {
        return 'reject';
    }
    if (testButtonMatches(buttonText, SETTINGS_PATTERNS, NEVER_MATCH_PATTERNS)) {
        return 'settings';
    }
    if (testButtonMatches(buttonText, ACCEPT_PATTERNS, NEVER_MATCH_PATTERNS)) {
        return 'accept';
    }
    if (testButtonMatches(buttonText, ACKNOWLEDGE_PATTERNS, NEVER_MATCH_PATTERNS)) {
        return 'acknowledge';
    }
    return 'other';
}

function getPotentialPopups(timeout = POPUP_SEARCH_MAX_TIME) {
    const isFramed = !isTopFrame();
    // do not inspect frames that are more than one level deep
    if (isFramed && window.parent && window.parent !== window.top) {
        return [];
    }

    return collectPotentialPopups(isFramed, timeout);
}

function collectPotentialPopups(isFramed: boolean, timeout = POPUP_SEARCH_MAX_TIME): PopupData[] {
    let elements = [];
    if (!isFramed) {
        elements = getPopupLikeElements(timeout);
    } else {
        // for iframes, just take the whole document
        const doc = document.body || document.documentElement;
        if (doc && isElementVisible(doc) && doc.innerText) {
            elements.push(doc);
        }
    }

    const potentialPopups: PopupData[] = [];

    // for each potential popup, get the buttons
    for (const el of elements) {
        if (el.innerText) {
            potentialPopups.push({
                text: el.innerText,
                element: el,
                buttons: getButtonData(el),
            });
        }
    }

    return potentialPopups;
}

export function isDialogLikeElement(node: HTMLElement): boolean {
    if (node.tagName === 'DIALOG' && node.hasAttribute('open')) {
        return true;
    }
    if (node.getAttribute('role') === 'dialog' || node.getAttribute('aria-modal') === 'true') {
        return true;
    }
    return false;
}

/**
 * Heuristic to get all elements that look like "popups"
 * TODO: this heuristic is too strict, not all popups are actually sticky/fixed
 */
function getPopupLikeElements(timeout = POPUP_SEARCH_MAX_TIME): HTMLElement[] {
    const startTime = performance.now();
    const walker = document.createTreeWalker(
        document.documentElement,
        NodeFilter.SHOW_ELEMENT, // visit only element nodes
        {
            acceptNode(node: HTMLElement) {
                if (node.tagName === 'BODY') {
                    return NodeFilter.FILTER_SKIP;
                }
                if (isElementVisible(node)) {
                    const cssPosition = window.getComputedStyle(node).position;
                    if (cssPosition === 'fixed' || cssPosition === 'sticky') {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    if (isDialogLikeElement(node)) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
                // start rejecting after POPUP_SEARCH_MAX_TIME to avoid blocking the main thread
                if (performance.now() - startTime > timeout) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_SKIP;
            },
        },
    );
    const found = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        found.push(node as HTMLElement);
    }
    return excludeContainers(found);
}

/**
 * Serialize all actionable buttons on the page
 */
export function getButtonData(el: HTMLElement): ButtonData[] {
    const actionableButtons = excludeContainers(getButtonLikeElements(el)).filter(
        (b) =>
            isElementVisible(b) &&
            !isDisabled(b) &&
            (b.innerText?.trim() ||
                // <input> values do not appear in innerText
                (b instanceof HTMLInputElement && ['submit', 'button'].includes(b.type) && b.value?.trim())),
    );

    return actionableButtons.map((b) => ({
        text: (b.innerText || b.textContent || '').trim() || (b as HTMLInputElement).value?.trim() || '',
        element: b,
    }));
}

function getButtonLikeElements(el: HTMLElement): HTMLElement[] {
    return Array.from(el.querySelectorAll(BUTTON_LIKE_ELEMENT_SELECTOR));
}

export function isDisabled(el: HTMLElement): boolean {
    // we want to be lenient here: if a non-input element has a disabled attribute, we want to consider it too
    return ('disabled' in el && Boolean(el.disabled)) || el.hasAttribute('disabled');
}

/**
 * Leave only elements that do not contain any other elements
 */
export function excludeContainers(elements: HTMLElement[]): HTMLElement[] {
    const results = [];
    if (elements.length > 0) {
        for (let i = elements.length - 1; i >= 0; i--) {
            let container = false;
            for (let j = 0; j < elements.length; j++) {
                if (i !== j && elements[i].contains(elements[j])) {
                    container = true;
                    break;
                }
            }
            if (!container) {
                results.push(elements[i]);
            }
        }
    }
    return results;
}
