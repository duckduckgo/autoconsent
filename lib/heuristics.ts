import { classifyButtons, classifyPopup, hasHeuristicPatterns, isExcludedPopup } from './heuristic-classify';
import { ButtonData, HeuristicLevel, HitTestGrid, PopupClassification, PopupData } from './types';
import { isElementVisible, isTopFrame } from './utils';

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';
const POPUP_SEARCH_MAX_TIME = 100;

// popup classifications the heuristic rule can act on, by heuristic mode
const ACCEPTED_LEVELS: Record<HeuristicLevel, PopupClassification[]> = {
    off: [],
    reject: ['reject'],
    tier1: ['reject', 'tier1'],
    tier2: ['reject', 'tier1', 'tier2'],
};

/**
 * Popups the heuristic rule can act on in this mode, sorted so that a popup with reject comes first.
 * @param timeout time budget for the whole search, in ms
 * @param hitTest hit-test the viewport before the DOM walk, to find popups the walk misses; when this finds a consent
 *   popup with reject, the walk is skipped
 */
export function getActionablePopups(mode: HeuristicLevel = 'reject', timeout = POPUP_SEARCH_MAX_TIME, hitTest = false): PopupData[] {
    const acceptedLevels = ACCEPTED_LEVELS[mode];
    const isActionable = (popup: PopupData) => acceptedLevels.includes(popup.regexClassification) && isConsentPopup(popup);
    const popups = searchPopups(timeout, hitTest, DEFAULT_HIT_TEST_GRID, true).filter(isActionable);
    // stable, so popups with the same classification keep their search order
    return popups.sort((a, b) => classificationRank(a) - classificationRank(b));
}

/**
 * Popup candidates, each labelled with a regexClassification from its buttons.
 * @param timeout time budget for the whole search, in ms
 * @param hitTest hit-test the viewport before the DOM walk, to find popups the walk misses
 * @param hitTestGrid points to hit-test, if not the default grid
 */
export function getPotentialPopups(timeout = POPUP_SEARCH_MAX_TIME, hitTest = false, hitTestGrid = DEFAULT_HIT_TEST_GRID): PopupData[] {
    return searchPopups(timeout, hitTest, hitTestGrid);
}

/**
 * @param stopOnReject skip the DOM walk when hit-testing finds a consent popup with reject
 */
function searchPopups(timeout: number, hitTest: boolean, hitTestGrid: HitTestGrid, stopOnReject = false): PopupData[] {
    if (!isTopFrame()) {
        return getFramePopups();
    }
    const deadline = performance.now() + timeout;
    // hit-test first: it takes a few ms, while on large pages the walk can use the whole budget
    const hitTestPopups = hitTest ? findPopupsByHitTest(deadline, hitTestGrid) : [];
    // the walk cannot find a better popup than one with reject
    if (stopOnReject && hitTestPopups.some((p) => p.regexClassification === 'reject' && isConsentPopup(p))) {
        return hitTestPopups;
    }
    const walkPopups = collectPositionedPopups(deadline);
    return [...walkPopups, ...mergeWalkOverlaps(hitTestPopups, walkPopups)];
}

// isConsentPopup scans the popup text with many patterns, and the search asks for the same popup more than once
const consentPopups = new WeakMap<PopupData, boolean>();

// reject, then tier1, then tier2; -1 for a popup no heuristic mode acts on
function classificationRank(popup: PopupData): number {
    return ACCEPTED_LEVELS.tier2.indexOf(popup.regexClassification);
}

// a consent popup the heuristic rule could act on in some mode
function isConsentPopup(popup: PopupData): boolean {
    if (!ACCEPTED_LEVELS.tier2.includes(popup.regexClassification)) {
        return false;
    }
    let result = consentPopups.get(popup);
    if (result === undefined) {
        const popupText = popup.text.trim();
        result = !!popupText && !isExcludedPopup(popupText) && hasHeuristicPatterns(popupText);
        consentPopups.set(popup, result);
    }
    return result;
}

/**
 * Where both searches found the same popup, keep the walk's candidate, with the hit points of the hit-test one.
 * Keep both when the hit-test one is a better consent popup: the walk candidate is not one (such as a wrapper that also
 * holds an age gate), or ranks lower (such as an accept-only fragment of a banner whose reject button the hit test found).
 */
function mergeWalkOverlaps(hitTestPopups: PopupData[], walkPopups: PopupData[]): PopupData[] {
    return hitTestPopups.filter((h) => {
        const hitIsConsent = isConsentPopup(h);
        const absorbs = (p: PopupData) => !hitIsConsent || (isConsentPopup(p) && classificationRank(p) <= classificationRank(h));
        const walkPopup = walkPopups.find((p) => composedOverlaps(p.element, h.element) && absorbs(p));
        if (walkPopup) {
            (walkPopup.hitPoints ??= []).push(...(h.hitPoints ?? []));
        }
        return !walkPopup;
    });
}

function getFramePopups(): PopupData[] {
    // do not inspect frames that are more than one level deep
    if (window.parent && window.parent !== window.top) {
        return [];
    }
    // for iframes, just take the whole document
    const frameElement = getFramePopupElement(document);
    const popup = frameElement && toPopupData(frameElement);
    if (!popup) {
        return [];
    }
    popup.source = 'frame';
    return [popup];
}

// fixed, sticky and dialog-like popups found by walking the DOM, with fragments expanded to their popup root
function collectPositionedPopups(deadline: number): PopupData[] {
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
        root.source = 'walk';
        potentialPopups.push(root);
    }
    // a fragment expanded to its popup root replaces any other candidates inside that root
    return potentialPopups.filter((p) => !expanded.some((root) => root !== p.element && composedContains(root, p.element)));
}

const DEFAULT_HIT_TEST_GRID: HitTestGrid = {
    columns: [0.1, 0.5, 0.9],
    // banners sit along the top and bottom edges and modals in the middle; rows 150px in added almost nothing in crawls
    edgeRows: [30, 90],
};

/**
 * Popups that are not fixed, sticky or dialog-like (for example banners in the normal page flow) are not found by
 * the DOM walk. Hit-test points across the viewport and climb from the topmost element at each point instead.
 * Prehide sets pointer-events: none, so a prehidden popup is only hit once prehide is lifted.
 */
function findPopupsByHitTest(deadline: number, grid: HitTestGrid): PopupData[] {
    // the popup that each climbed element leads to, or null if its climb found none
    const climbed = new Map<Element, PopupData | null>();
    const found: PopupData[] = [];
    // any page element can be hit, so leave out forms
    const toPopup = (el: HTMLElement) => (el.querySelector(TEXT_ENTRY_SELECTOR) ? null : toPopupRoot(el));
    for (const [x, y] of getHitTestPoints(grid)) {
        if (performance.now() > deadline) {
            return found;
        }
        const path: HTMLElement[] = [];
        // the cast stops TypeScript narrowing to null, as only the shouldStop closure assigns it before use
        let reached = null as PopupData | null;
        // stop where an earlier climb already went, and at popups already found
        const shouldStop = (el: HTMLElement) => {
            if (climbed.has(el)) {
                reached = climbed.get(el) ?? null;
                return true;
            }
            // the climb went inside a popup already found, or reached one of its ancestors
            const overlapped = found.find((p) => composedOverlaps(p.element, el));
            if (overlapped) {
                reached = composedContains(overlapped.element, el) ? overlapped : null;
                return true;
            }
            path.push(el);
            return false;
        };
        const hit = closestHTMLElement(deepElementFromPoint(x, y));
        const popup = climbToPopup(hit, MAX_HIT_TEST_CLIMB_DEPTH, toPopup, shouldStop);
        if (popup) {
            popup.source = 'hitTest';
            found.push(popup);
            reached = popup;
        }
        for (const el of path) {
            climbed.set(el, reached);
        }
        if (reached) {
            (reached.hitPoints ??= []).push([x, y]);
        }
    }
    return found;
}

// the grid as [x, y] viewport points in CSS px: the top edge rows, the middle, then the bottom edge rows, each column by column
function getHitTestPoints(grid: HitTestGrid): [number, number][] {
    const { innerWidth: width, innerHeight: height } = window;
    const rows = [...grid.edgeRows, height / 2, ...grid.edgeRows.map((y) => height - y)].map((y) => Math.round(y));
    const ys = [...new Set(rows)].filter((y) => y >= 0 && y < height);
    return ys.flatMap((y) => grid.columns.map((column): [number, number] => [Math.round(column * width), y]));
}

// precaution, not yet seen in crawls: login, search and sign-up forms can carry consent wording and a "Continue" button
const TEXT_ENTRY_SELECTOR =
    'textarea, input:not([type]), input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="number"], input[type="url"]';

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

function toPopupData(el: HTMLElement, shadowHosts?: HTMLElement[], text = getElementText(el)): PopupData | null {
    if (!text) {
        return null;
    }
    const buttons = getButtonData(el, shadowHosts);
    classifyButtons(buttons);
    return { text, element: el, buttons, regexClassification: classifyPopup(buttons) };
}

// buttons beyond their labels, and at least one button the heuristics recognise (not just policy links)
function hasPopupButtons(text: string, buttons: ButtonData[]): boolean {
    return !isOnlyButtonText(text, buttons) && buttons.some((b) => b.regexClassification !== 'other');
}

// detect patterns include button wording, so a bare button bar matches; expand it so exclusions and crawl text see the whole popup
function isOnlyButtonText(text: string, buttons: ButtonData[]): boolean {
    let rest = text;
    for (const button of buttons) {
        rest = rest.replace(button.text, '');
    }
    return rest.replace(/\s+/g, '').length < 10;
}

/**
 * The element as a popup, if it has consent text and popup buttons.
 */
function toPopupRoot(el: HTMLElement, shadowHosts?: HTMLElement[]): PopupData | null {
    // check the text first: it is cheaper than collecting buttons
    const text = getElementText(el);
    if (!text || !hasHeuristicPatterns(text)) {
        return null;
    }
    const popup = toPopupData(el, shadowHosts, text);
    return popup && hasPopupButtons(text, popup.buttons) ? popup : null;
}

// Bound how far climbs reach. The page-level stop in climbToPopup is the main guard against false positives;
// these limits only keep the search cheap on deep trees.
const MAX_FRAGMENT_EXPANSION_DEPTH = 6;
const MAX_HIT_TEST_CLIMB_DEPTH = 8;

/**
 * Climb from el through up to maxDepth composed ancestors, and return the first popup that toPopup accepts.
 */
function climbToPopup(
    el: HTMLElement | null,
    maxDepth: number,
    toPopup: (el: HTMLElement) => PopupData | null,
    shouldStop?: (el: HTMLElement) => boolean,
): PopupData | null {
    for (let depth = 0; el && depth < maxDepth; depth++, el = getComposedParent(el)) {
        // stop before reaching page-level containers, whose text includes unrelated page copy
        if (
            shouldStop?.(el) ||
            el === document.body ||
            el === document.documentElement ||
            el.getBoundingClientRect().height > window.innerHeight
        ) {
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
    // the same acceptance check as toPopupRoot, on the buttons already collected
    if (hasHeuristicPatterns(popup.text) && hasPopupButtons(popup.text, popup.buttons)) {
        return popup;
    }
    const parent = getComposedParent(popup.element);
    return climbToPopup(parent, MAX_FRAGMENT_EXPANSION_DEPTH, (el) => toPopupRoot(el, shadowHosts)) ?? popup;
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

// either element contains the other, across shadow roots
function composedOverlaps(a: Node, b: Node): boolean {
    return composedContains(a, b) || composedContains(b, a);
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
 * Popups that are not positioned are found by hit-testing instead, when enabled (findPopupsByHitTest).
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
