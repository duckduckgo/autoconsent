import { DETECT_PATTERNS, NEVER_MATCH_PATTERNS, REJECT_PATTERNS } from './heuristic-patterns';
import { ButtonData, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';
const TEXT_LIMIT = 100000;

export function checkHeuristicPatterns(allText: string, detectPatterns = DETECT_PATTERNS) {
    allText = allText.slice(0, TEXT_LIMIT);
    const patterns = [];
    const snippets = [];

    for (const p of detectPatterns) {
        const matches = allText?.match(p);
        if (matches) {
            patterns.push(p.toString());
            snippets.push(...matches.map((m) => m.substring(0, 200)));
        }
    }
    return { patterns, snippets };
}

export function getActionablePopups(): PopupData[] {
    const popups = getPotentialPopups();
    const result = popups.reduce((acc, popup) => {
        const popupText = popup.text?.trim();
        if (popupText) {
            const { patterns } = checkHeuristicPatterns(popupText);
            if (patterns.length > 0) {
                const { rejectButtons, otherButtons } = classifyButtons(popup.buttons);
                if (rejectButtons.length > 0) {
                    acc.push({
                        ...popup,
                        rejectButtons,
                        otherButtons,
                    });
                }
            }
        }
        return acc;
    }, [] as PopupData[]);
    return result;
}

export function classifyButtons(buttons: ButtonData[]): { rejectButtons: ButtonData[]; otherButtons: ButtonData[] } {
    const rejectButtons = [];
    const otherButtons = [];
    for (const button of buttons) {
        if (isRejectButton(button.text)) {
            rejectButtons.push(button);
        } else {
            otherButtons.push(button);
        }
    }
    return {
        rejectButtons,
        otherButtons,
    };
}

export function isRejectButton(buttonText: string, rejectPatterns = REJECT_PATTERNS, neverMatchPatterns = NEVER_MATCH_PATTERNS): boolean {
    if (!buttonText) {
        return false;
    }
    const cleanedButtonText = cleanButtonText(buttonText);
    return (
        !neverMatchPatterns.some((p) => p.test(cleanedButtonText)) &&
        rejectPatterns.some((p) => (p instanceof RegExp && p.test(cleanedButtonText)) || p === cleanedButtonText)
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

function getPotentialPopups() {
    const isFramed = !isTopFrame();
    // do not inspect frames that are more than one level deep
    if (isFramed && window.parent && window.parent !== window.top) {
        return [];
    }

    return collectPotentialPopups(isFramed);
}

function collectPotentialPopups(isFramed: boolean): PopupData[] {
    let elements = [];
    if (!isFramed) {
        elements = getPopupLikeElements();
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
        const text = getPopupText(el);
        if (text) {
            potentialPopups.push({
                text,
                element: el,
                buttons: getButtonData(el),
            });
        }
    }

    return potentialPopups;
}

/**
 * Return the visible text of a popup candidate, piercing an open shadow root when the
 * host has no light-DOM text (common for web-component based CMPs). Skips <style> and
 * <script> children so their source text doesn't leak into heuristic matching.
 */
function getPopupText(el: HTMLElement): string {
    if (el.innerText) {
        return el.innerText;
    }
    if (el.shadowRoot) {
        const parts: string[] = [];
        for (const child of Array.from(el.shadowRoot.children) as HTMLElement[]) {
            if (child.tagName === 'STYLE' || child.tagName === 'SCRIPT') continue;
            // innerText is layout-aware and approximates what a user would see.
            const text = child.innerText;
            if (text) parts.push(text);
        }
        if (parts.length > 0) {
            return parts.join('\n');
        }
    }
    return '';
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

function isPositionedLikePopup(node: HTMLElement): boolean {
    const cssPosition = window.getComputedStyle(node).position;
    return cssPosition === 'fixed' || cssPosition === 'sticky' || isDialogLikeElement(node);
}

/**
 * Heuristic to get all elements that look like "popups"
 * TODO: this heuristic is too strict, not all popups are actually sticky/fixed
 */
function getPopupLikeElements(): HTMLElement[] {
    const walker = document.createTreeWalker(
        document.documentElement,
        NodeFilter.SHOW_ELEMENT, // visit only element nodes
        {
            acceptNode(node: HTMLElement) {
                if (node.tagName === 'BODY') {
                    return NodeFilter.FILTER_SKIP;
                }
                if (isElementVisible(node)) {
                    if (isPositionedLikePopup(node)) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    // Shadow-rooted hosts are accepted so web-component CMPs are detected.
                    // Skip hosts nested inside a light-DOM popup candidate so excludeContainers
                    // doesn't drop the real popup in favour of an unrelated inner widget.
                    if (node.shadowRoot && !hasPopupLikeAncestor(node)) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
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

function hasPopupLikeAncestor(node: HTMLElement): boolean {
    let parent = node.parentElement;
    while (parent && parent.tagName !== 'BODY') {
        if (isPositionedLikePopup(parent)) {
            return true;
        }
        parent = parent.parentElement;
    }
    return false;
}

/**
 * Serialize all actionable buttons on the page
 */
export function getButtonData(el: HTMLElement): ButtonData[] {
    const actionableButtons = excludeContainers(getButtonLikeElements(el)).filter(
        (b) =>
            isElementVisible(b) &&
            !isDisabled(b) &&
            (b.innerText.trim() ||
                // <input> values do not appear in innerText
                (b instanceof HTMLInputElement && ['submit', 'button'].includes(b.type) && b.value?.trim())),
    );

    return actionableButtons.map((b) => ({
        text: (b.innerText || b.textContent || '').trim() || (b as HTMLInputElement).value?.trim() || '',
        element: b,
    }));
}

function getButtonLikeElements(el: HTMLElement): HTMLElement[] {
    const result = Array.from(el.querySelectorAll<HTMLElement>(BUTTON_LIKE_ELEMENT_SELECTOR));
    if (el.shadowRoot) {
        result.push(...Array.from(el.shadowRoot.querySelectorAll<HTMLElement>(BUTTON_LIKE_ELEMENT_SELECTOR)));
    }
    return result;
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
