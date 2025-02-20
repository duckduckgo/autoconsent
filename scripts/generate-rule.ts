import { chromium, ElementHandle, JSHandle, Page } from '@playwright/test';
import 'dotenv/config';
import * as fs from 'fs/promises';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import path from 'path';
import { z } from 'zod';
import { AutoConsentCMPRule } from '../lib/rules';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const ClassifyCookieConsentNoticeResponse = z.object({
    isCookieConsentNotice: z.boolean(),
});

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
        const contentText = (await contentFrame.evaluate(() => document.documentElement.innerText)).trim();
        if (contentText) {
            return contentText;
        }
    }

    return '';
}

async function classifyCookieConsentNotice(text: string): Promise<boolean> {
    const systemPrompt = `Your task is to classify text from the innerText property of HTML overlay elements.

  An overlay element is considered to be a "cookie consent notice" if it meets all of these criteria:
  1. it explicitly notifies the user of the site's use of cookies or other storage technology, such as: "We use cookies...", "This site uses...", etc.
  2. it offers the user choices for the usage of cookies on the site, such as: "Accept", "Reject", "Learn More", etc., or informs the user that their use of the site means they accept the usage of cookies.

  Note: This definition does not include adult content notices or any other type of notice that is primarily focused on age verification or content restrictions. Cookie consent notices are specifically intended to inform users about the website's use of cookies and obtain their consent for such use.

  Note: A cookie consent notice should specifically relate to the site's use of cookies or other storage technology that stores data on the user's device, such as HTTP cookies, local storage, or session storage. Requests for permission to access geolocation information, camera, microphone, etc., do not fall under this category.

  Note: Do NOT classify a website header or footer as a "cookie consent notice". Website headers or footers may contain a list of links, possibly including a privacy policy, cookie policy, or terms of service document, but their primary purpose is navigational rather than informational.`;

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
                    content: `
  The following text was captured from ${ifTruncated}the innerText of an HTML overlay element:

  \`\`\`
  ${snippet}
  \`\`\`

  Is the overlay element above considered to be a "cookie consent notice"? Provide your answer as a boolean.`,
                },
            ],
            response_format: zodResponseFormat(ClassifyCookieConsentNoticeResponse, 'classifyCookieConsentNotice'),
        });

        const result = completion.choices[0].message.parsed;
        return result.isCookieConsentNotice;
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

async function generateRule(domain: string, element: ElementHandle<HTMLElement>): Promise<AutoConsentCMPRule> {
    const hideableSelector = await getCssSelector(await getHideableElement(element));
    const selector = await getCssSelector(element);
    return {
        name: domain,
        cosmetic: true,
        prehideSelectors: [hideableSelector],
        detectCmp: [
            {
                exists: selector,
            },
        ],
        detectPopup: [
            {
                visible: selector,
            },
        ],
        optIn: [],
        optOut: [
            {
                hide: hideableSelector,
            },
        ],
    };
}

async function getAccessibilityTree(page: Page, element: ElementHandle<HTMLElement>) {
    const snapshot = await page.accessibility.snapshot({ root: element, interestingOnly: false });

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
                children: node.children?.map((child) => filterNode(child)).filter(Boolean),
            };
        }
        return null;
    };

    return filterNode(snapshot);
}

async function isSameNode(left: ElementHandle<HTMLElement>, right: ElementHandle<HTMLElement>) {
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

        console.log('Found a cookie consent overlay', await debugDescription(cookieConsentOverlay));

        const rule = await generateRule(domain, cookieConsentOverlay);

        const outputDir = path.join(process.cwd(), 'generate-rule-data/rules');
        const outputPath = path.join(outputDir, domain + '.json');
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(outputPath, JSON.stringify(rule, null, 2));
        console.log('Wrote rule to', outputPath);

        // // const snapshot = await getAccessibilityTree(page, cookiePopup.element);
        // // console.log('Snapshot', JSON.stringify(snapshot, null, 2));
        // await page.click('#onetrust-pc-btn-handler');
        // await page.waitForTimeout(1000);
        // const newPotentialCookiePopups = await detectPotentialCookiePopups(page);
        // const newlyAddedCookiePopups = [];
        // for (const newPopup of newPotentialCookiePopups) {
        //     let isNew = true;
        //     for (const originalPopup of overlays) {
        //         if (await isSameNode(newPopup.element, originalPopup.element)) {
        //             isNew = false;
        //             break;
        //         }
        //     }
        //     if (isNew) {
        //         newlyAddedCookiePopups.push(newPopup);
        //     }
        // }
        // console.log('newly added cookie popups', newlyAddedCookiePopups.length, newlyAddedCookiePopups);
        // // const newPopup = await page.$('#onetrust-pc-sdk');
        // // const newSnapshot = await getAccessibilityTree(page, newPopup as ElementHandle<HTMLElement>);
        // // console.log('New snapshot', JSON.stringify(newSnapshot, null, 2));
    } finally {
        await browser.close();
    }
}

main().catch(console.error);
