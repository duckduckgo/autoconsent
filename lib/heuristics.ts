import { checkHeuristicPatterns, classifyButtons, classifyPopup, isExcludedPopup } from './heuristic-classify';
import { ButtonData, HeuristicLevel, PopupClassification, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

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
    if (isFramed) {
        // for iframes, just take the whole document
        const frameElement = getFramePopupElement(document);
        const popup = frameElement && toPopupData(frameElement);
        return popup ? [popup] : [];
    }

    const potentialPopups: PopupData[] = [];
    const expanded: HTMLElement[] = [];
    for (const el of getPopupLikeElements(timeout)) {
        const popup = toPopupData(el);
        if (!popup) {
            continue;
        }
        const root = expandPopupFragment(popup);
        if (potentialPopups.some((p) => p.element === root.element)) {
            continue;
        }
        if (root !== popup) {
            expanded.push(root.element);
        }
        potentialPopups.push(root);
    }
    // a fragment expanded to its popup root replaces any other candidates inside that root
    return potentialPopups.filter((p) => !expanded.some((root) => root !== p.element && composedContains(root, p.element)));
}

function toPopupData(el: HTMLElement): PopupData | null {
    const text = getElementText(el);
    if (!text) {
        return null;
    }
    return {
        text,
        element: el,
        buttons: getButtonData(el),
    };
}

const MAX_FRAGMENT_EXPANSION_DEPTH = 6;

function looksLikeConsentPopup(text: string, buttons: ButtonData[]): boolean {
    return buttons.length > 0 && !isOnlyButtonText(text, buttons) && checkHeuristicPatterns(text).patterns.length > 0;
}

// a bar of buttons can match detect patterns ("accept all"), but lacks the popup text needed to classify it
function isOnlyButtonText(text: string, buttons: ButtonData[]): boolean {
    let rest = text;
    for (const button of buttons) {
        rest = rest.replace(button.text, '');
    }
    return rest.replace(/\s+/g, '').length < 10;
}

/**
 * A positioned candidate is often only part of a popup, such as a sticky button bar or heading.
 * If it does not look like a consent popup on its own, use the nearest ancestor that does.
 */
export function expandPopupFragment(popup: PopupData): PopupData {
    if (looksLikeConsentPopup(popup.text, popup.buttons)) {
        return popup;
    }
    let el = getComposedParent(popup.element);
    for (let depth = 0; el && depth < MAX_FRAGMENT_EXPANSION_DEPTH; depth++, el = getComposedParent(el)) {
        // stop before reaching page-level containers, whose text includes unrelated page copy
        if (el === document.body || el === document.documentElement || el.getBoundingClientRect().height > window.innerHeight) {
            break;
        }
        const text = getElementText(el);
        if (!text || checkHeuristicPatterns(text).patterns.length === 0) {
            continue;
        }
        const buttons = getButtonData(el);
        if (buttons.length > 0 && !isOnlyButtonText(text, buttons)) {
            return { text, element: el, buttons };
        }
    }
    return popup;
}

function getComposedParent(el: HTMLElement): HTMLElement | null {
    if (el.parentElement) {
        return el.parentElement;
    }
    const parent = el.parentNode;
    return parent instanceof ShadowRoot && parent.host instanceof HTMLElement ? parent.host : null;
}

/**
 * The whole document of a frame, if it is rendered and has text. The body can have zero height when all of its
 * content is positioned, so only check visibility styles, not size.
 */
export function getFramePopupElement(doc: Document): HTMLElement | null {
    const el = doc.body || doc.documentElement;
    const win = doc.defaultView;
    if (!el || !win || win.innerWidth === 0 || win.innerHeight === 0) {
        return null;
    }
    if (typeof el.checkVisibility === 'function' && !el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) {
        return null;
    }
    return getElementText(el).trim() ? el : null;
}

/**
 * Rendered text of an element, including the content of its own open shadow root.
 */
export function getElementText(el: HTMLElement): string {
    const text = el.innerText || '';
    if (!el.shadowRoot) {
        return text;
    }
    // innerText of a shadow host does not include its shadow content
    const shadowText = Array.from(el.shadowRoot.children)
        .map((child) => (isRenderedTextElement(child) ? getElementText(child) : ''))
        .filter((t) => t.trim())
        .join('\n');
    return [text, shadowText].filter((t) => t.trim()).join('\n');
}

// innerText of an element that is not rendered falls back to textContent, which would leak hidden text
function isRenderedTextElement(el: Element): el is HTMLElement {
    return (
        el instanceof HTMLElement &&
        !['STYLE', 'SCRIPT', 'TEMPLATE', 'NOSCRIPT', 'LINK', 'SLOT'].includes(el.tagName) &&
        window.getComputedStyle(el).display !== 'none'
    );
}

/**
 * Like Node.contains, but also looks through shadow root boundaries.
 */
export function composedContains(container: Node, node: Node): boolean {
    if (container.contains(node)) {
        return true;
    }
    let root = node.getRootNode();
    while (root instanceof ShadowRoot) {
        if (container.contains(root.host)) {
            return true;
        }
        root = root.host.getRootNode();
    }
    return false;
}

/**
 * Stricter visibility check for popup candidates: catches panels hidden by an ancestor's opacity or visibility,
 * and elements outside the viewport, which isElementVisible lets through.
 */
export function isPopupCandidateVisible(el: HTMLElement): boolean {
    if (!isElementVisible(el)) {
        return false;
    }
    // checkVisibility is not available in older browsers
    if (typeof el.checkVisibility === 'function' && !el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) {
        return false;
    }
    const rect = el.getBoundingClientRect();
    return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth
    );
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
    const found: HTMLElement[] = [];
    // open shadow roots are walked after the tree that hosts them
    const roots: Node[] = [document.documentElement];
    for (let i = 0; i < roots.length; i++) {
        if (i > 0 && performance.now() - startTime > timeout) {
            break;
        }
        const walker = document.createTreeWalker(
            roots[i],
            NodeFilter.SHOW_ELEMENT, // visit only element nodes
            {
                acceptNode(node: HTMLElement) {
                    if (node.shadowRoot) {
                        roots.push(node.shadowRoot);
                    }
                    if (node.tagName === 'BODY') {
                        return NodeFilter.FILTER_SKIP;
                    }
                    if (isElementVisible(node)) {
                        const cssPosition = window.getComputedStyle(node).position;
                        if (
                            (cssPosition === 'fixed' || cssPosition === 'sticky' || isDialogLikeElement(node)) &&
                            isPopupCandidateVisible(node)
                        ) {
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
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            found.push(node as HTMLElement);
        }
    }
    // Empty positioned children should not displace a contentful popup container.
    return excludeContainers(found.filter((element) => getElementText(element).trim()));
}

/**
 * Serialize all actionable buttons on the page
 */
export function getButtonData(el: HTMLElement): ButtonData[] {
    const actionableButtons = excludeContainers(getButtonLikeElements(el)).filter(
        (b) =>
            isElementVisible(b) &&
            !isDisabled(b) &&
            (getElementText(b).trim() ||
                // <input> values do not appear in innerText
                (b instanceof HTMLInputElement && ['submit', 'button'].includes(b.type) && b.value?.trim())),
    );

    return actionableButtons.map((b) => ({
        text: (getElementText(b) || b.textContent || '').trim() || (b as HTMLInputElement).value?.trim() || '',
        element: b,
    }));
}

function getButtonLikeElements(root: HTMLElement | ShadowRoot): HTMLElement[] {
    const buttons = Array.from(root.querySelectorAll<HTMLElement>(BUTTON_LIKE_ELEMENT_SELECTOR));
    const hosts = root instanceof HTMLElement && root.shadowRoot ? [root] : [];
    for (const el of root.querySelectorAll('*')) {
        if (el.shadowRoot) {
            hosts.push(el as HTMLElement);
        }
    }
    for (const host of hosts) {
        buttons.push(...getButtonLikeElements(host.shadowRoot!));
    }
    return buttons;
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
                if (i !== j && composedContains(elements[i], elements[j])) {
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
