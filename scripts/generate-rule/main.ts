import { chromium, ElementHandle, JSHandle, Page } from '@playwright/test';
import 'dotenv/config';
import * as fs from 'fs/promises';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import path from 'path';
import { z } from 'zod';
import { AutoConsentCMPRule } from '../../lib/rules';

type InteractiveElementDescription = {
    key: string;
    role: string;
    name: string;
    description: string;
};

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const CookieConsentNoticeClassification = z.object({
    isCookieConsentNotice: z.boolean(),
});

const CookieConsentNoticeFeaturesSchema = z.object({
    acceptButtonKey: z.string(),
    rejectButtonKey: z.string(),
    settingsButtonKey: z.string(),
    dismissButtonKey: z.string(),
});

type CookieConsentNoticeFeatures = z.infer<typeof CookieConsentNoticeFeaturesSchema>;

async function unwrapArrayHandle<T>(handle: JSHandle<T[]>): Promise<JSHandle<T>[]> {
    const length = await handle.evaluate((array) => array.length);
    const promises: Promise<JSHandle<T>>[] = [];
    for (let i = 0; i < length; i++) {
        promises.push(handle.evaluateHandle((array, index) => array[index], i));
    }
    return Promise.all(promises);
}

async function findOverlays(page: Page): Promise<ElementHandle<HTMLElement>[]> {
    const elements = await page.evaluateHandle(() => {
        const isVisible = (node: HTMLElement) => {
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
        };

        const collectMatchingElements = (criteria: (el: HTMLElement) => boolean) => {
            const elements: HTMLElement[] = [];
            const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT, {
                acceptNode: (n) => (n instanceof HTMLElement && criteria(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
            });
            while (walker.nextNode()) {
                elements.push(walker.currentNode as HTMLElement);
            }
            return elements;
        };

        const nonParentElements = (elements: HTMLElement[]) => {
            const results: HTMLElement[] = [];
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
        };

        const getETLDP1 = (domain: string) => {
            // Simple implementation - remove www. and take last 2 parts
            const parts = domain.replace('www.', '').split('.');
            return parts.slice(-2).join('.');
        };

        const hasManyFirstPartyLinks = (thisDomain: string, el: HTMLElement) => {
            const linkPartiness = Array.from(el.querySelectorAll('a[href]')).map((a) => {
                try {
                    const linkETLDP1 = getETLDP1(new URL((a as HTMLAnchorElement).href).host);
                    return thisDomain === linkETLDP1;
                } catch {
                    return false; // Invalid URLs count as third-party
                }
            });
            const linkPartinessCount = linkPartiness.reduce(
                (acc, v) => {
                    if (v === true) {
                        acc.first += 1;
                    } else {
                        acc.third += 1;
                    }
                    return acc;
                },
                { first: 0, third: 0 },
            );
            if (linkPartinessCount.first > 10 && linkPartinessCount.first > linkPartinessCount.third) {
                return false;
            }
            return true;
        };

        // Collect fixed/sticky positioned elements that are visible
        let elements = collectMatchingElements((el) => {
            if (el.tagName === 'BODY') return false;
            const computedStyle = window.getComputedStyle(el).position;
            return (computedStyle === 'fixed' || computedStyle === 'sticky') && isVisible(el);
        });

        // Filter out elements with many first party links (likely a nav)
        const thisDomain = getETLDP1(window.location.host);
        elements = elements.filter((e) => hasManyFirstPartyLinks(thisDomain, e));

        // Get non-parent elements
        elements = nonParentElements(elements);

        return elements;
    });

    const handles = await unwrapArrayHandle(elements);
    return handles.map((handle) => handle.asElement());
}

async function getText(element: ElementHandle<HTMLElement>): Promise<string> {
    const innerText = (await element.evaluate((el) => el.innerText)).trim();
    if (innerText) {
        return innerText;
    }

    const iframes = await element.$$('iframe');
    for (const iframe of iframes) {
        const contentFrame = await iframe.contentFrame();
        if (!contentFrame) {
            continue;
        }
        const contentText = (await contentFrame.evaluate(() => document.documentElement.innerText)).trim();
        if (contentText) {
            return contentText;
        }
    }

    return '';
}

async function classifyCookieConsentNotice(text: string): Promise<boolean> {
    const systemPrompt = `
      Your task is to classify text from the innerText property of HTML overlay elements.

      An overlay element is considered to be a "cookie consent notice" if it meets all of these criteria:
      1. it explicitly notifies the user of the site's use of cookies or other storage technology, such as: "We use cookies...", "This site uses...", etc.
      2. it offers the user choices for the usage of cookies on the site, such as: "Accept", "Reject", "Learn More", etc., or informs the user that their use of the site means they accept the usage of cookies.

      Note: This definition does not include adult content notices or any other type of notice that is primarily focused on age verification or content restrictions. Cookie consent notices are specifically intended to inform users about the website's use of cookies and obtain their consent for such use.

      Note: A cookie consent notice should specifically relate to the site's use of cookies or other storage technology that stores data on the user's device, such as HTTP cookies, local storage, or session storage. Requests for permission to access geolocation information, camera, microphone, etc., do not fall under this category.

      Note: Do NOT classify a website header or footer as a "cookie consent notice". Website headers or footers may contain a list of links, possibly including a privacy policy, cookie policy, or terms of service document, but their primary purpose is navigational rather than informational.
  `;

    const MAX_LENGTH = 500;
    let snippet = text.slice(0, MAX_LENGTH);
    let ifTruncated = '';
    if (snippet.length !== text.length) {
        snippet += '...';
        ifTruncated = `the first ${MAX_LENGTH} characters of `;
    }

    try {
        const completion = await openai.beta.chat.completions.parse({
            model: 'gpt-4o-mini-2024-07-18',
            messages: [
                { role: 'system', content: systemPrompt },
                {
                    role: 'user',
                    content: `The following text was captured from ${ifTruncated}the innerText of an HTML overlay element:\n\n${snippet}`,
                },
            ],
            response_format: zodResponseFormat(CookieConsentNoticeClassification, 'CookieConsentNoticeClassification'),
        });

        const result = completion.choices[0].message.parsed;
        return result?.isCookieConsentNotice ?? false;
    } catch (error) {
        console.error('Error classifying candidate:', error);
    }

    return false;
}

async function getCssSelector(element: ElementHandle<HTMLElement>): Promise<string> {
    return element.evaluate((element) => {
        const id = element.id;
        if (id) {
            return '#' + id;
        }

        const classes = Array.from(element.classList);
        if (!classes.length) {
            return element.tagName.toLowerCase();
        }

        // Try combinations of classes, starting with single classes
        for (let i = 1; i <= classes.length; i++) {
            const combinations: string[] = [];
            const generate = (start: number, current: string[]) => {
                if (current.length === i) {
                    combinations.push(current.join(''));
                    return;
                }
                for (let j = start; j < classes.length; j++) {
                    generate(j + 1, [...current, '.' + classes[j]]);
                }
            };
            generate(0, []);

            for (const selector of combinations) {
                const matches = document.querySelectorAll(selector);
                if (matches.length === 1 && matches[0] === element) {
                    return selector;
                }
            }
        }

        // Fallback to nth-child selector
        let current = element;
        const parts = [];
        while (current !== document.documentElement) {
            let selector = current.tagName.toLowerCase();
            const parent = current.parentElement;
            if (!parent) break;

            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(current) + 1;
            if (siblings.length > 1) {
                selector += `:nth-child(${index})`;
            }
            parts.unshift(selector);
            current = parent;
        }
        return parts.join(' > ');
    });
}

async function getHideableElement(element: ElementHandle<HTMLElement>): Promise<ElementHandle<HTMLElement>> {
    return element.evaluateHandle((element) => {
        const windowRect = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: window.innerHeight,
        };

        let outermostHideableElement = element;
        let innermostHideableElement = element;
        // Begin by looking upwards in the DOM for the outermost element that _can_ be hidden.
        // When traversing upwards, this is the last element that adds no additional content to the
        // original notice's `innerText`.
        while (
            outermostHideableElement.parentElement &&
            outermostHideableElement.parentElement.innerText.trim() === element.innerText.trim()
        ) {
            outermostHideableElement = outermostHideableElement.parentElement;
            // In the meantime, look for the innermost element that _should_ be hidden.
            // While traversing upwards, this is either the first element, or the last element that has:
            // - full screen dimensions, AND
            // - a blur filter and/or semi-transparent background style
            const style = getComputedStyle(outermostHideableElement);
            const rect = outermostHideableElement.getBoundingClientRect();
            if (
                rect.left === windowRect.left &&
                rect.right === windowRect.right &&
                rect.top === windowRect.top &&
                rect.bottom === windowRect.bottom &&
                (style.backgroundColor.startsWith('rgba(') || style.backdropFilter !== 'none')
            ) {
                innermostHideableElement = outermostHideableElement;
            }
        }
        return innermostHideableElement;
    });
}

async function findByKey(root: ElementHandle<HTMLElement>, key: string): Promise<ElementHandle<HTMLElement> | null> {
    if (!key) return null;
    return (await root.$(`*[data-autoconsent-key="${key}"]`)) as ElementHandle<HTMLElement> | null;
}

async function generateRule(
    domain: string,
    overlay: ElementHandle<HTMLElement>,
    features: CookieConsentNoticeFeatures,
): Promise<AutoConsentCMPRule> {
    const frame = await overlay.ownerFrame();
    if (!frame) throw new Error('Overlay is not in a frame');

    const selector = await getCssSelector(overlay);

    const hideableElement = await getHideableElement(overlay);
    const hideableSelector = await getCssSelector(hideableElement);

    const acceptButton = await findByKey(overlay, features.acceptButtonKey);
    const acceptButtonSelector = acceptButton ? await getCssSelector(acceptButton) : null;
    const rejectButton = await findByKey(overlay, features.rejectButtonKey);
    const rejectButtonSelector = rejectButton ? await getCssSelector(rejectButton) : null;

    return {
        name: domain,
        prehideSelectors: [hideableSelector],
        detectCmp: [{ exists: selector }],
        detectPopup: [{ visible: selector }],
        optIn: acceptButtonSelector ? [{ waitForThenClick: acceptButtonSelector }] : [],
        optOut: rejectButtonSelector ? [{ waitForThenClick: rejectButtonSelector }] : [],
    };
}

async function getAccessibilityTree(element: ElementHandle<HTMLElement>) {
    const frame = await element.ownerFrame();
    if (!frame) throw new Error('Element is not in a frame');

    const snapshot = await frame.page().accessibility.snapshot({ root: element, interestingOnly: false });

    const INTERACTIVE_ROLES = new Set([
        'button',
        'link',
        'switch',
        'checkbox',
        'radio',
        'menuitem',
        'option',
        'searchbox',
        'textbox',
        'combobox',
        'slider',
        'spinbutton',
    ]);

    const hasInteractiveNodes = (node: typeof snapshot): boolean => {
        if (!node) {
            return false;
        }
        if (INTERACTIVE_ROLES.has(node.role)) {
            return true;
        }
        if (node.children && node.children.length > 0) {
            return node.children.some((child) => hasInteractiveNodes(child));
        }
        return false;
    };

    const filterNode = (node: typeof snapshot): typeof snapshot => {
        if (!node) {
            return null;
        }
        if (hasInteractiveNodes(node)) {
            return {
                ...node,
                children: node.children?.flatMap((child) => {
                    const filteredChild = filterNode(child);
                    return filteredChild ? [filteredChild] : [];
                }),
            };
        }
        return null;
    };

    return filterNode(snapshot);
}

// This type isn't exported, so we infer it
type AccessibilityNode = Awaited<ReturnType<typeof getAccessibilityTree>>;

async function markInteractiveElements(root: ElementHandle<HTMLElement>): Promise<InteractiveElementDescription[]> {
    return root.evaluate((rootElement) => {
        const results: InteractiveElementDescription[] = [];

        function getAccessibleName(element: HTMLElement): string {
            // Check aria-label
            const ariaLabel = element.getAttribute('aria-label');
            if (ariaLabel) return ariaLabel.trim();

            // Check aria-labelledby
            const labelledBy = element.getAttribute('aria-labelledby');
            if (labelledBy) {
                const labelElement = document.getElementById(labelledBy);
                if (labelElement) return labelElement.textContent?.trim() || '';
            }

            // Check other properties
            if (element instanceof HTMLInputElement) {
                if (element.value) return element.value.trim();
                if (element.placeholder) return element.placeholder.trim();
            }

            // Check title
            if (element.title) return element.title.trim();

            // Finally, fall back to text content
            return element.textContent?.trim() || '';
        }

        function getDescription(element: HTMLElement): string {
            const describedBy = element.getAttribute('aria-describedby');
            if (describedBy) {
                const descElement = document.getElementById(describedBy);
                if (descElement) {
                    return descElement.textContent?.trim() || '';
                }
            }
            return '';
        }

        const isVisible = (node: HTMLElement) => {
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
        };

        function isInteractive(element: HTMLElement): boolean {
            // Check if enabled
            const isEnabled = !element.hasAttribute('disabled');

            // Check if focusable
            const tabIndex = element.getAttribute('tabindex');
            const isFocusable = !tabIndex || parseInt(tabIndex) >= 0;

            return isEnabled && isFocusable;
        }

        function traverse(element: HTMLElement) {
            if (!isVisible(element)) {
                return;
            }

            const tagName = element.tagName.toLowerCase();
            const role = element.getAttribute('role');
            const type = element.getAttribute('type');

            const isRelevant =
                tagName === 'button' ||
                role === 'button' ||
                (tagName === 'input' && (type === 'checkbox' || type === 'radio')) ||
                role === 'checkbox' ||
                role === 'radio';

            if (isRelevant && isInteractive(element)) {
                let key: string;
                if (element.hasAttribute('data-autoconsent-key')) {
                    key = element.getAttribute('data-autoconsent-key')!;
                } else {
                    key = crypto.randomUUID();
                    element.setAttribute('data-autoconsent-key', key);
                }

                let elementRole: string;
                if (role) {
                    elementRole = role;
                } else {
                    if (tagName === 'button') elementRole = 'button';
                    else if (type === 'checkbox') elementRole = 'checkbox';
                    else if (type === 'radio') elementRole = 'radio';
                    else elementRole = 'button'; // fallback
                }

                results.push({
                    key,
                    role: elementRole,
                    name: getAccessibleName(element),
                    description: getDescription(element),
                });
            }

            // Traverse children
            for (const child of element.children) {
                if (child instanceof HTMLElement) {
                    traverse(child);
                }
            }
        }

        traverse(rootElement);
        return results;
    });
}

async function isSameElement(left: ElementHandle<HTMLElement>, right: ElementHandle<HTMLElement>) {
    return left.evaluate((left, right) => left.isSameNode(right), right);
}

async function debugDescription(element: ElementHandle<HTMLElement>): Promise<string> {
    return element.evaluate((element) => {
        const parts = [element.tagName.toLowerCase()];
        if (element.id) {
            parts.push(`id="${element.id}"`);
        }
        if (element.className) {
            parts.push(`class="${element.className}"`);
        }
        return `<${parts.join(' ')} />`;
    });
}

async function identifyCookieConsentNoticeFeatures(
    interactiveElements: InteractiveElementDescription[],
): Promise<CookieConsentNoticeFeatures> {
    const systemPrompt = `
      Your task is to identify the Accept button, Reject button, Settings button, and Dismiss button within a cookie consent notice overlay displayed on a website.

      ## INPUT

      Your input will be a list of objects representing all buttons that were found within the overlay. Each object contains:

      - key: A number you will use to reference this element.
      - role: The ARIA role of the button.
      - name: The ARIA label of the button.
      - description: The ARIA description of the button. May be empty.

      ## OUTPUT

      Return an object containing:

      - acceptButtonKey: The key of the element that should be clicked to accept cookies, or ''. This is usually a button with the text "Accept" or "Allow".
      - rejectButtonKey: The key of the element that should be clicked to reject cookies or accept only non-essential cookies, or ''. This is usually a button with the text "Reject" or "Allow essential".
      - settingsButtonKey: The key of the element that should be clicked to open a settings page, or ''. This is usually a button with the text "Settings" or "Preferences".
      - dismissButtonKey: The key of the element that should be clicked to close the overlay, or ''. This is usually a button with the text "Dismiss" or "Close".

      ## REQUIREMENTS

      The overlay may not contain some or all of these buttons. If there is no such button, set the corresponding property to ''.

      If a button is unrelated, set the corresponding property to ''.

      You must ONLY reference buttons that are present in the overlay.

      ## EXAMPLES

      Input:
      {
        { key: 'a7a630e3-eade-4a78-b6ff-153189b22ecc', role: 'button', name: 'Privacy Policy', description: '' },
        { key: 'c05d8df9-c80f-43cd-8e60-99114d4a3a1a', role: 'button', name: 'Accept', description: '' },
        { key: 'd588908f-115c-4a69-a669-bd280dcaefc4', role: 'button', name: 'Accept Essential', description: '' },
      ]

      Output:
      {
        acceptButtonKey: 'c05d8df9-c80f-43cd-8e60-99114d4a3a1a',
        rejectButtonKey: 'd588908f-115c-4a69-a669-bd280dcaefc4',
        settingsButtonKey: '',
        dismissButtonKey: '',
      }

      Input:
      {
        { key: '82c1a499-c9ef-4881-8a9d-2c4c233945ad', role: 'button', name: 'Accept All', description: '' },
        { key: '6c073697-66b0-4a78-b43b-b5e2df8641f0', role: 'button', name: 'Customize', description: '' },
      ]

      Output:
      {
        acceptButtonKey: '82c1a499-c9ef-4881-8a9d-2c4c233945ad',
        rejectButtonKey: '',
        settingsButtonKey: '6c073697-66b0-4a78-b43b-b5e2df8641f0',
        dismissButtonKey: '',
      }
  `;

    const EMPTY_RESULT = { acceptButtonKey: '', rejectButtonKey: '', settingsButtonKey: '', dismissButtonKey: '' };

    try {
        const completion = await openai.beta.chat.completions.parse({
            model: 'gpt-4o-2024-08-06',
            // model: 'gpt-4o-mini-2024-07-18',
            messages: [
                { role: 'system', content: systemPrompt },
                {
                    role: 'user',
                    content: `Input:\n\n${JSON.stringify(interactiveElements)}`,
                },
            ],
            response_format: zodResponseFormat(CookieConsentNoticeFeaturesSchema, 'CookieConsentNoticeFeatures'),
        });

        return completion.choices[0].message.parsed ?? EMPTY_RESULT;
    } catch (error) {
        console.error('Error classifying candidate:', error);
    }

    return EMPTY_RESULT;
}

async function main() {
    const url = process.argv[2];

    if (!url) {
        console.log('Usage: generate-rule <URL>');
        process.exit(1);
    }

    const domain = new URL(url).hostname.replace('www.', '');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        console.log('Navigating to', url);
        await page.goto(url, { waitUntil: 'networkidle' });

        console.log('Detecting overlays...');
        const overlays = await findOverlays(page);
        console.log('Found', overlays.length, 'overlays');

        if (overlays.length === 0) {
            return;
        }

        console.log('Classifying overlay text...');
        let cookieConsentOverlay: ElementHandle<HTMLElement> | undefined;
        for (const overlay of overlays) {
            const text = await getText(overlay);
            if (await classifyCookieConsentNotice(text)) {
                cookieConsentOverlay = overlay;
                break;
            }
        }

        if (!cookieConsentOverlay) {
            console.log('No cookie consent overlay detected');
            return;
        }

        console.log('Found a cookie consent overlay:', await debugDescription(cookieConsentOverlay));

        console.log('Identifying features...');
        const interactiveElements = await markInteractiveElements(cookieConsentOverlay);
        const features = await identifyCookieConsentNoticeFeatures(interactiveElements);
        console.log('Features:', {
            acceptButton: interactiveElements.find((element) => element.key === features.acceptButtonKey),
            rejectButton: interactiveElements.find((element) => element.key === features.rejectButtonKey),
            settingsButton: interactiveElements.find((element) => element.key === features.settingsButtonKey),
            dismissButton: interactiveElements.find((element) => element.key === features.dismissButtonKey),
        });

        const detectNewOverlays = async () => {
            const newOverlays = [];
            for (const newOverlay of await findOverlays(page)) {
                let isNew = true;
                for (const existingOverlay of overlays) {
                    if (await isSameElement(newOverlay, existingOverlay)) {
                        isNew = false;
                        break;
                    }
                }
                if (isNew) {
                    newOverlays.push(newOverlay);
                }
            }
            return newOverlays;
        };

        const waitForNewOverlays = async () => {
            const newOverlays = await detectNewOverlays();
            if (newOverlays.length > 0) {
                return newOverlays;
            }
            await page.waitForTimeout(50);
            return await waitForNewOverlays();
        };

        let rule: AutoConsentCMPRule | undefined;

        // if (!features.rejectButton && features.settingsButton) {
        //     console.log('Opening settings...');
        //     const settingsButton = await findByKey(cookieConsentOverlay, features.settingsButton);
        //     if (settingsButton) {
        //         await settingsButton.click();
        //         const newOverlays = await Promise.race([waitForNewOverlays(), page.waitForTimeout(10000)]);
        //         if (newOverlays) {
        //             const newOverlay = newOverlays[0];
        //             console.log('Found new overlay:', await debugDescription(newOverlay));
        //             const newInteractiveElements = await markInteractiveElements(newOverlay);
        //         }
        //     }
        // }

        if (!rule) {
            rule = await generateRule(domain, cookieConsentOverlay, features);
        }

        console.log('Rule:', rule);

        const outputDir = path.join(process.cwd(), 'generate-rule-data/rules');
        const outputPath = path.join(outputDir, domain + '.json');
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(outputPath, JSON.stringify(rule, null, 2));
        console.log('Wrote rule to', outputPath);
    } finally {
        await browser.close();
    }
}

main().catch(console.error);
