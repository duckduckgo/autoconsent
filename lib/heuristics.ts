import { checkHeuristicPatterns, classifyButtons, classifyButtonTextRegex, classifyPopup, isExcludedPopup } from './heuristic-classify';
import { ButtonData, HeuristicLevel, PopupClassification, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';
const POPUP_SEARCH_MAX_TIME = 100;

export function getActionablePopups(mode: HeuristicLevel = 'reject', timeout = POPUP_SEARCH_MAX_TIME): PopupData[] {
    const acceptedLevels: PopupClassification[] =
        mode === 'tier2' ? ['reject', 'tier1', 'tier2'] : mode === 'tier1' ? ['reject', 'tier1'] : ['reject'];
    const popups = getPotentialPopups(timeout).filter((popup) => {
        const popupText = popup.text?.trim();
        if (!popupText || isExcludedPopup(popupText) || !hasPopupText(popupText)) {
            return false;
        }
        classifyButtons(popup.buttons);
        popup.regexClassification = classifyPopup(popup.buttons);
        return popup.regexClassification !== undefined && acceptedLevels.includes(popup.regexClassification);
    });
    // a popup with reject will always win
    return popups.sort((a, b) => ((a.regexClassification ?? '') > (b.regexClassification ?? '') ? 1 : -1));
}

/**
 * @param timeout time budget for the whole search, in ms
 */
export function getPotentialPopups(timeout = POPUP_SEARCH_MAX_TIME): PopupData[] {
    if (!isTopFrame()) {
        // do not inspect frames that are more than one level deep
        if (window.parent && window.parent !== window.top) {
            return [];
        }
        // for iframes, just take the whole document
        const frameElement = getFramePopupElement(document);
        const popup = frameElement && toPopupData(frameElement);
        return popup ? [popup] : [];
    }
    const deadline = performance.now() + timeout;
    const { popups, shadowHosts } = collectPositionedPopups(deadline);
    return [...popups, ...findPopupsByHitTest(popups, shadowHosts, deadline)];
}

// fixed, sticky and dialog-like popups found by walking the DOM, with fragments expanded to their popup root
function collectPositionedPopups(deadline: number): { popups: PopupData[]; shadowHosts: HTMLElement[] } {
    const { elements, shadowHosts } = getPopupLikeElements(deadline);
    const potentialPopups: PopupData[] = [];
    const expanded: HTMLElement[] = [];
    for (const el of elements) {
        const popup = toPopupData(el, shadowHosts);
        if (!popup) {
            continue;
        }
        // past the deadline, keep the candidates found so far as they are
        const root = performance.now() > deadline ? popup : expandPopupFragment(popup, shadowHosts);
        if (potentialPopups.some((p) => p.element === root.element)) {
            continue;
        }
        if (root !== popup) {
            expanded.push(root.element);
        }
        potentialPopups.push(root);
    }
    // a fragment expanded to its popup root replaces any other candidates inside that root
    const popups = potentialPopups.filter((p) => !expanded.some((root) => root !== p.element && composedContains(root, p.element)));
    return { popups, shadowHosts };
}

const HIT_TEST_COLUMNS = [0.1, 0.5, 0.9];
// banners sit along the top and bottom edges and modals in the middle
const HIT_TEST_EDGE_ROWS = [30, 90, 150];

/**
 * Popups that are not fixed, sticky or dialog-like (for example banners in the normal page flow) are not found by
 * the DOM walk. Hit-test points across the viewport and climb from the topmost element at each point instead.
 */
function findPopupsByHitTest(known: PopupData[], shadowHosts: HTMLElement[], deadline: number): PopupData[] {
    const covered = known.map((p) => p.element);
    const visited = new Set<Element>();
    const found: PopupData[] = [];
    // stop where an earlier climb already went, and at known popups
    const shouldStop = (el: HTMLElement) => {
        if (visited.has(el)) {
            return true;
        }
        visited.add(el);
        return covered.some((c) => composedContains(c, el) || composedContains(el, c));
    };
    // any page element can be hit, so unlike positioned candidates, require a button the heuristics recognise
    const toHitPopup = (el: HTMLElement) => (hasTextEntry(el) ? null : toPopupRoot(el, shadowHosts, true));
    withoutPrehide(() => {
        for (const y of getHitTestRows()) {
            for (const column of HIT_TEST_COLUMNS) {
                if (performance.now() > deadline) {
                    return;
                }
                const hit = closestHTMLElement(deepElementFromPoint(column * window.innerWidth, y));
                const popup = climbToPopup(hit, toHitPopup, shouldStop);
                if (popup) {
                    found.push(popup);
                    covered.push(popup.element);
                }
            }
        }
    });
    return found;
}

function getHitTestRows(): number[] {
    const height = window.innerHeight;
    const rows = [...HIT_TEST_EDGE_ROWS, height / 2, ...HIT_TEST_EDGE_ROWS.map((y) => height - y)];
    return [...new Set(rows)].filter((y) => y >= 0 && y < height);
}

const TEXT_ENTRY_SELECTOR =
    'textarea, input:not([type]), input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="number"], input[type="url"]';

// precaution, not yet seen in crawls: login, search and sign-up forms can carry consent wording and a "Continue" button
function hasTextEntry(el: HTMLElement): boolean {
    return el.querySelector(TEXT_ENTRY_SELECTOR) !== null;
}

function deepElementFromPoint(x: number, y: number): Element | null {
    let el = document.elementFromPoint(x, y);
    while (el?.shadowRoot) {
        const inner = el.shadowRoot.elementFromPoint(x, y);
        if (!inner || inner === el) {
            break;
        }
        el = inner;
    }
    return el;
}

function closestHTMLElement(el: Element | null): HTMLElement | null {
    while (el && !(el instanceof HTMLElement)) {
        el = el.parentElement;
    }
    return el;
}

// prehide sets pointer-events: none, which hit-testing skips; the change is not painted within this synchronous task
function withoutPrehide(fn: () => void) {
    const style = document.getElementById('autoconsent-prehide');
    if (!(style instanceof HTMLStyleElement) || style.disabled) {
        fn();
        return;
    }
    style.disabled = true;
    try {
        fn();
    } finally {
        style.disabled = false;
    }
}

function toPopupData(el: HTMLElement, shadowHosts?: HTMLElement[]): PopupData | null {
    const text = getElementText(el);
    if (!text) {
        return null;
    }
    return {
        text,
        element: el,
        buttons: getButtonData(el, shadowHosts),
    };
}

function hasPopupText(text: string): boolean {
    return checkHeuristicPatterns(text).patterns.length > 0;
}

// consent text, and buttons beyond their labels; optionally at least one button the heuristics recognise
function isPopupRoot(text: string, buttons: ButtonData[], requireKnownButton: boolean): boolean {
    return (
        buttons.length > 0 &&
        hasPopupText(text) &&
        !isOnlyButtonText(text, buttons) &&
        (!requireKnownButton || buttons.some((b) => classifyButtonTextRegex(b.text) !== 'other'))
    );
}

// a bar of buttons can match detect patterns ("accept all"), but lacks the popup text needed to classify it
function isOnlyButtonText(text: string, buttons: ButtonData[]): boolean {
    let rest = text;
    for (const button of buttons) {
        rest = rest.replace(button.text, '');
    }
    return rest.replace(/\s+/g, '').length < 10;
}

function toPopupRoot(el: HTMLElement, shadowHosts: HTMLElement[] | undefined, requireKnownButton: boolean): PopupData | null {
    // check the text first: it is cheaper than collecting buttons
    const text = getElementText(el);
    if (!text || !hasPopupText(text)) {
        return null;
    }
    const buttons = getButtonData(el, shadowHosts);
    return isPopupRoot(text, buttons, requireKnownButton) ? { text, element: el, buttons } : null;
}

// Bounds how far a climb reaches. The page-level stop in climbToPopup is the main guard against false positives;
// this limit only keeps the search cheap on deep trees.
const MAX_POPUP_CLIMB_DEPTH = 8;

/**
 * Climb from el through its composed ancestors, and return the first popup that toPopup accepts.
 */
function climbToPopup(
    el: HTMLElement | null,
    toPopup: (el: HTMLElement) => PopupData | null,
    shouldStop?: (el: HTMLElement) => boolean,
): PopupData | null {
    for (let depth = 0; el && depth < MAX_POPUP_CLIMB_DEPTH; depth++, el = getComposedParent(el)) {
        // stop before reaching page-level containers, whose text includes unrelated page copy
        if (el === document.body || el === document.documentElement || el.getBoundingClientRect().height > window.innerHeight) {
            return null;
        }
        if (shouldStop?.(el)) {
            return null;
        }
        const popup = toPopup(el);
        if (popup) {
            return popup;
        }
    }
    return null;
}

/**
 * A positioned candidate is often only part of a popup, such as a sticky button bar or heading.
 * If it does not look like a consent popup on its own, use the nearest ancestor that does.
 */
function expandPopupFragment(popup: PopupData, shadowHosts?: HTMLElement[]): PopupData {
    if (isPopupRoot(popup.text, popup.buttons, false)) {
        return popup;
    }
    const parent = getComposedParent(popup.element);
    return climbToPopup(parent, (el) => toPopupRoot(el, shadowHosts, false)) ?? popup;
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
    if (!el || !win || win.innerWidth === 0 || win.innerHeight === 0 || !isStyleVisible(el)) {
        return null;
    }
    return getElementText(el).trim() ? el : null;
}

// catches elements hidden by an ancestor's visibility; checkVisibility is not available in older browsers.
// Opacity is not checked: prehide hides popups with opacity: 0, and they must stay detectable.
function isStyleVisible(el: HTMLElement): boolean {
    return typeof el.checkVisibility !== 'function' || el.checkVisibility({ checkVisibilityCSS: true });
}

/**
 * Rendered text of an element, including the content of its own open shadow root.
 */
function getElementText(el: HTMLElement): string {
    const text = el.innerText || '';
    if (!el.shadowRoot) {
        return text;
    }
    // innerText of a shadow host does not include its shadow content
    const shadowTexts = Array.from(el.shadowRoot.children, (child) => (isRenderedTextElement(child) ? getElementText(child) : ''));
    return [text, ...shadowTexts].filter((t) => t.trim()).join('\n');
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
function composedContains(container: Node, node: Node): boolean {
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
 * Stricter visibility check for popup candidates: catches panels hidden by an ancestor's visibility,
 * and elements outside the viewport, which isElementVisible lets through.
 */
function isPopupCandidateVisible(el: HTMLElement): boolean {
    return isElementVisible(el) && isStyleVisible(el) && isOnScreen(el);
}

// A zero-size wrapper can still show its content: then any child that is on screen counts, unless the wrapper clips it.
function isOnScreen(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        return window.getComputedStyle(el).overflow === 'visible' && Array.from(el.children).some((child) => isOnScreen(child));
    }
    return rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
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
function getPopupLikeElements(deadline: number): { elements: HTMLElement[]; shadowHosts: HTMLElement[] } {
    const found: HTMLElement[] = [];
    const shadowHosts: HTMLElement[] = [];
    // open shadow roots are walked after the tree that hosts them
    const roots: Node[] = [document.documentElement];
    for (let i = 0; i < roots.length; i++) {
        if (i > 0 && performance.now() > deadline) {
            break;
        }
        const walker = document.createTreeWalker(
            roots[i],
            NodeFilter.SHOW_ELEMENT, // visit only element nodes
            {
                acceptNode(node: HTMLElement) {
                    if (node.shadowRoot) {
                        shadowHosts.push(node);
                        roots.push(node.shadowRoot);
                    }
                    if (node.tagName === 'BODY') {
                        return NodeFilter.FILTER_SKIP;
                    }
                    const style = window.getComputedStyle(node);
                    // nothing under display: none can be visible, and styling hidden subtrees is slow
                    if (style.display === 'none') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    const cssPosition = style.position;
                    if (
                        (cssPosition === 'fixed' || cssPosition === 'sticky' || isDialogLikeElement(node)) &&
                        isPopupCandidateVisible(node)
                    ) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    // start rejecting after the deadline to avoid blocking the main thread
                    if (performance.now() > deadline) {
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
    return { elements: excludeContainers(found.filter((element) => getElementText(element).trim())), shadowHosts };
}

/**
 * Serialize all actionable buttons on the page
 * @param shadowHosts open shadow hosts on the page, if already known; otherwise they are searched for under el
 */
export function getButtonData(el: HTMLElement, shadowHosts?: HTMLElement[]): ButtonData[] {
    const buttons: ButtonData[] = [];
    for (const b of excludeContainers(getButtonLikeElements(el, shadowHosts))) {
        if (!isElementVisible(b) || isDisabled(b)) {
            continue;
        }
        const text =
            getElementText(b).trim() ||
            // <input> values do not appear in innerText
            (b instanceof HTMLInputElement && ['submit', 'button'].includes(b.type) ? b.value?.trim() : '');
        if (text) {
            buttons.push({ text, element: b });
        }
    }
    return buttons;
}

function getButtonLikeElements(el: HTMLElement, shadowHosts = findShadowHosts(el)): HTMLElement[] {
    const buttons = Array.from(el.querySelectorAll<HTMLElement>(BUTTON_LIKE_ELEMENT_SELECTOR));
    for (const host of shadowHosts) {
        if (composedContains(el, host)) {
            buttons.push(...host.shadowRoot!.querySelectorAll<HTMLElement>(BUTTON_LIKE_ELEMENT_SELECTOR));
        }
    }
    return buttons;
}

// all open shadow hosts at or under root, including those nested in other shadow roots
function findShadowHosts(root: HTMLElement | ShadowRoot): HTMLElement[] {
    const hosts: HTMLElement[] = [];
    const candidates =
        root instanceof HTMLElement ? [root, ...root.querySelectorAll<HTMLElement>('*')] : root.querySelectorAll<HTMLElement>('*');
    for (const el of candidates) {
        if (el.shadowRoot) {
            hosts.push(el, ...findShadowHosts(el.shadowRoot));
        }
    }
    return hosts;
}

export function isDisabled(el: HTMLElement): boolean {
    // we want to be lenient here: if a non-input element has a disabled attribute, we want to consider it too
    return ('disabled' in el && Boolean(el.disabled)) || el.hasAttribute('disabled');
}

/**
 * Leave only elements that do not contain any other elements
 */
export function excludeContainers(elements: HTMLElement[]): HTMLElement[] {
    // mark every element that is an ancestor of another one, instead of comparing all pairs
    const candidates = new Set<Node>(elements);
    const containers = new Set<Node>();
    for (const el of elements) {
        for (let node = el.parentNode; node; node = node.parentNode || (node instanceof ShadowRoot ? node.host : null)) {
            if (candidates.has(node)) {
                containers.add(node);
            }
        }
    }
    return elements.filter((el) => !containers.has(el)).reverse();
}
