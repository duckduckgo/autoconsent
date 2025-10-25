import { NEVER_MATCH_PATTERNS, REJECT_PATTERNS } from './button-patterns';
import { ButtonData, PopupData } from './types';

// TODO: check for false positive detections per pattern
export const DETECT_PATTERNS = [
    /accept cookies/gi,
    /accept all/gi,
    /reject all/gi,
    /only necessary cookies/gi, // "only necessary" is probably too broad
    /by clicking.*(accept|agree|allow)/gi,
    /(by continuing.*cookie)|(cookie.*by continuing)/gi,
    /(by continuing.*privacy)|(privacy.*by continuing)/gi,
    /we (use|serve)( optional)? cookies/gi,
    /we are using cookies/gi,
    /use of cookies/gi,
    /(this|our) (web)?site.*cookies/gi,
    /cookies (and|or) .* technologies/gi,
    /such as cookies/gi,
    /read more about.*cookies/gi,
    /consent to.*cookies/gi,
    /we and our partners.*cookies/gi,
    /we.*store.*information.*such as.*cookies/gi,
    /store and\/or access information.*on a device/gi,
    /personalised ads and content, ad and content measurement/gi,

    // it might be tempting to add the patterns below, but they cause too many false positives. Don't do it :)
    // /cookies? settings/i,
    // /cookies? preferences/i,

    // FR
    /utilisons.*des.*cookies/gi,
    /nous.*utilisons.*des/gi,
    /des.*cookies.*pour/gi,
    /des.*informations.*sur/gi,
    /retirer.*votre.*consentement/gi,
    /accéder.*à.*des/gi,
    /à.*des.*informations/gi,
    /et.*nos.*partenaires/gi,
    /publicités.*et.*du.*contenu/gi,
    /utilise.*des.*cookies/gi,
    /utilisent.*des.*cookies/gi,
    /stocker.*et.*ou.*accéder/gi,
    /consentement.*à.*tout.*moment/gi,
    /votre.*consentement/gi,
    /accepter.*tout/gi,
    /utilisation.*des.*cookies/gi,
    /cookies.*ou.*technologies/gi,
    /acceptez.*l.*utilisation/gi,
    /continuer sans accepter/gi,
    /tout refuser/gi,
    /(refuser|rejeter) tous les cookies/gi,
    /je refuse/gi,
    /refuser et continuer/gi,
    /refuser les cookies/gi,
    /seulement nécessaires/gi,
    /je désactive les finalités non essentielles/gi,
    /cookies essentiels uniquement/gi,
    /nécessaires uniquement/gi,

    // DE
    /wir.*verwenden.*cookies/gi,
    /wir.*und.*unsere.*partner/gi,
    /zugriff.*auf.*informationen.*auf/gi,
    /inhalte.*messung.*von.*werbeleistung.*und/gi,
    /cookies.*und.*andere/gi,
    /verwendung.*von.*cookies/gi,
    /wir.*nutzen.*cookies/gi,
    /verwendet.*cookies/gi,
    /sie.*können.*ihre.*auswahl/gi,
    /und.*ähnliche.*technologien/gi,
    /cookies.*wir.*verwenden/gi,

    /alles?.*ablehnen/gi,
    /(nur|nicht).*(zusätzliche|essenzielle|funktionale|notwendige|erforderliche).*(cookies|akzeptieren|erlauben|ablehnen)/gi,
    /weiter.*(ohne|mit).*(einwilligung|zustimmung|cookies)/gi,
    /(cookies|einwilligung).*ablehnen/gi,
    /nur funktionale cookies akzeptieren/gi,
    /optionale ablehnen/gi,
    /zustimmung verweigern/gi,

    // NL
    /gebruik.*van.*cookies/gi,
    /(we|wij).*gebruiken.*cookies.*om/gi,
    /cookies.*en.*vergelijkbare/gi,

    /(alles|cookies).*(afwijzen|weigeren|verwerpen)/gi,
    /alleen.*noodzakelijke?\b/gi,
    /cookies weigeren/gi,
    /weiger.*(cookies|alles)/gi,
    /doorgaan zonder (te accepteren|akkoord te gaan)/gi,
    /alleen.*(optionele|functionele|functioneel|noodzakelijke|essentiële).*cookies/gi,
    /wijs alles af/gi,
];

const BUTTON_LIKE_ELEMENT_SELECTOR = 'button, input[type="button"], input[type="submit"], a, [role="button"], [class*="button"]';

export function checkHeuristicPatterns(allText: string) {
    const patterns = [];
    const snippets = [];

    for (const p of DETECT_PATTERNS) {
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

function classifyButtons(buttons: ButtonData[]): { rejectButtons: ButtonData[]; otherButtons: ButtonData[] } {
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

function isRejectButton(buttonText: string): boolean {
    if (!buttonText) {
        return false;
    }
    const cleanedButtonText = cleanButtonText(buttonText);
    return (
        !NEVER_MATCH_PATTERNS.some((p) => p.test(cleanedButtonText)) &&
        REJECT_PATTERNS.some((p) => (p instanceof RegExp && p.test(cleanedButtonText)) || p === cleanedButtonText)
    );
}

function cleanButtonText(buttonText: string): string {
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
    const isFramed = window.top !== window || location.ancestorOrigins?.length > 0;
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
        if (doc && isVisible(doc) && doc.innerText) {
            elements.push(doc);
        }
    }

    const potentialPopups: PopupData[] = [];

    // for each potential popup, get the buttons
    for (const el of elements) {
        if (el.innerText) {
            potentialPopups.push({
                text: el.innerText,
                selector: getUniqueSelector(el),
                buttons: getButtonData(el),
            });
        }
    }

    return potentialPopups;
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
                const cssPosition = window.getComputedStyle(node).position;
                if ((cssPosition === 'fixed' || cssPosition === 'sticky') && isVisible(node)) {
                    return NodeFilter.FILTER_ACCEPT;
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
 * Get a unique selector for an element
 * @param el - The element to get the unique selector for
 * @returns The unique selector for the element
 */
function getUniqueSelector(el: HTMLElement): string {
    // We need to strike a balance here. Selector has to be unique, but we want to avoid auto-generated (randomized) identifiers to make the it resilient. Assumptions:
    // - Classes are the most common thing to randomize, so we use them as the last resort.
    // - The general shape of the DOM doesn't change that much, so order is always preferred
    // - data attributes can contain anything, so don't add them by default (except for data-testid, which is usually fine)
    // - IDs are often used on the popup containers, so are very useful. Sometimes they are randomized too, but it's not as common.
    const specificity = {
        testid: true,
        ids: true,
        order: true,
        dataAttributes: false,
        classes: false,
        absoluteOrder: false,
    };
    let selector = getSelector(el, specificity);

    // increase specificity until the selector is unique
    try {
        if (document.querySelectorAll(selector).length > 1) {
            specificity.order = true;
            selector = getSelector(el, specificity);
        }

        if (document.querySelectorAll(selector).length > 1) {
            specificity.ids = true;
            selector = getSelector(el, specificity);
        }

        if (document.querySelectorAll(selector).length > 1) {
            specificity.dataAttributes = true;
            selector = getSelector(el, specificity);
        }

        if (document.querySelectorAll(selector).length > 1) {
            specificity.classes = true;
            selector = getSelector(el, specificity);
        }

        if (document.querySelectorAll(selector).length > 1) {
            specificity.absoluteOrder = true;
            selector = getSelector(el, specificity);
        }
    } catch (e) {
        console.error(`Error getting unique selector for`, el, e);
        if (e instanceof DOMException && e.message.includes('is not a valid selector')) {
            return 'cookiepopups-collector-selector-error';
        }
    }

    return selector;
}

/**
 * Serialize all actionable buttons on the page
 */
function getButtonData(el: HTMLElement): ButtonData[] {
    const actionableButtons = excludeContainers(getButtonLikeElements(el)).filter(
        (b) =>
            isVisible(b) &&
            !isDisabled(b) &&
            (b.innerText.trim() ||
                // <input> values do not appear in innerText
                (b instanceof HTMLInputElement && b.type in ['submit', 'button'] && b.value?.trim())),
    );

    return actionableButtons.map((b) => ({
        text: b.innerText ?? b.textContent ?? '',
        selector: getUniqueSelector(b),
    }));
}

/**
 * Get the selector for an element
 * @param el - The element to get the selector for
 * @param specificity - details to add to the selector
 * @returns The selector for the element
 */
function getSelector(
    el: HTMLElement,
    specificity: { order?: boolean; ids?: boolean; dataAttributes?: boolean; classes?: boolean; absoluteOrder?: boolean; testid?: boolean },
): string {
    let element = el;
    let parent;
    let result = '';

    if (element.nodeType !== Node.ELEMENT_NODE) {
        return result; // Should be an empty string if not an element, or handle as an error
    }

    parent = element.parentNode;

    while (parent instanceof HTMLElement) {
        const siblings = Array.from(parent.children);
        const tagName = element.tagName.toLowerCase();
        let localSelector = tagName;

        if (specificity.order) {
            if (
                specificity.absoluteOrder ||
                (siblings.length > 1 &&
                    parent !== document.body && // element order under <body> is often unstable.
                    parent !== document.documentElement)
            ) {
                localSelector += `:nth-child(${siblings.indexOf(element) + 1})`;
            }
        }

        if (specificity.ids && tagName !== 'body') {
            // use getAttribute() instead of element.id to protect against DOM clobbering
            if (element.getAttribute('id')) {
                localSelector += `#${CSS.escape(element.getAttribute('id')!)}`;
            } else if (!element.hasAttribute('id')) {
                // do not add it for id attribute without a value
                localSelector += `:not([id])`;
            }
        }

        if (specificity.dataAttributes && element.attributes instanceof NamedNodeMap) {
            const dataAttributes = Array.from(element.attributes).filter((a) => a.name.startsWith('data-'));
            dataAttributes.forEach((a) => {
                const escapedValue = CSS.escape(a.value);
                localSelector += `[${a.name}="${escapedValue}"]`;
            });
        } else if (specificity.testid) {
            // data-testid is a common attribute used by testing frameworks to identify elements
            const testid = element.getAttribute('data-testid');
            if (testid) {
                localSelector += `[data-testid="${CSS.escape(testid)}"]`;
            }
        }

        if (specificity.classes && element.classList instanceof DOMTokenList) {
            const classes = Array.from(element.classList);
            if (classes.length > 0) {
                localSelector += `.${classes.map((c) => CSS.escape(c)).join('.')}`;
            }
        }

        result = localSelector + (result ? ' > ' + result : '');
        element = parent;
        parent = element.parentNode;
    }

    return result;
}

function getButtonLikeElements(el: HTMLElement): HTMLElement[] {
    return Array.from(el.querySelectorAll(BUTTON_LIKE_ELEMENT_SELECTOR));
}

function isDisabled(el: HTMLElement): boolean {
    // we want to be lenient here: if a non-input element has a disabled attribute, we want to consider it too
    return ('disabled' in el && Boolean(el.disabled)) || el.hasAttribute('disabled');
}

/**
 * Leave only elements that do not contain any other elements
 */
function excludeContainers(elements: HTMLElement[]): HTMLElement[] {
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

// See also isElementVisible() in utils.ts
function isVisible(node: HTMLElement): boolean {
    if (!node.isConnected) {
        return false;
    }
    const style = window.getComputedStyle(node);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
    }
    const rect = node.getBoundingClientRect();
    return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth &&
        rect.bottom > 0 &&
        rect.right > 0
    );
}
