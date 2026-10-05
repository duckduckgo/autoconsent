import { checkHeuristicPatterns, classifyButtons, classifyPopup, isExcludedPopup } from './heuristic-classify';
import { ButtonData, HeuristicLevel, PopupClassification, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

export * from './heuristic-classify';

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';
const POPUP_SEARCH_MAX_TIME = 100;

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
            if (isExcludedPopup(popupText)) {
                return acc;
            }
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

export function getPotentialPopups(timeout = POPUP_SEARCH_MAX_TIME): PopupData[] {
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
    // Empty positioned children should not displace a contentful popup container.
    return excludeContainers(found.filter((element) => element.innerText?.trim()));
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
