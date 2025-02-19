import { chromium, ElementHandle, Page } from '@playwright/test';
import * as fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';
import { AutoConsentCMPRule } from '../lib/rules';
import 'dotenv/config';

interface CandidateNotice {
    text: string;
    selector: string;
    boundingBox: { x: number; y: number; width: number; height: number };
    innermostHideableElementSelector: string;
}

interface NoticeAction {
    selector: string;
    action: 'click' | 'toggle';
    purpose: 'reject' | 'save' | 'show_options';
}

async function detectCandidateNotices(page: Page): Promise<CandidateNotice[]> {
    await page.exposeFunction('extractFrameText', async (iframeHandle: ElementHandle<HTMLIFrameElement>) => {
        return iframeHandle.contentFrame().then((frameDoc) => frameDoc.evaluate(() => document.documentElement.innerText));
    });

    const candidates = await page.evaluate(async () => {
        // Helper function to check visibility
        const isVisible = (node: HTMLElement) => {
            if (!(node instanceof HTMLElement) || !node.isConnected) {
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

        // Helper function to collect matching elements
        const collectMatchingElements = (criteria: (e: HTMLElement) => boolean) => {
            const elements: HTMLElement[] = [];
            const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT, {
                acceptNode: (n) => (n instanceof HTMLElement && criteria(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
            });
            while (walker.nextNode()) {
                elements.push(walker.currentNode as HTMLElement);
            }
            return elements;
        };

        // Helper function to filter out parent elements
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

        // Helper that simulates getting the eTLD+1 of a domain
        const getETLDP1 = (domain: string) => {
            // Simple implementation - remove www. and take last 2 parts
            const parts = domain.replace('www.', '').split('.');
            return parts.slice(-2).join('.');
        };

        // Helper to check if element has many first-party links
        const hasManyFirstPartyLinks = (thisDomain: string, e: HTMLElement) => {
            const linkPartiness = Array.from(e.querySelectorAll('a[href]')).map((a) => {
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

        // Helper to get text from a candidate element
        const getText = async (el: HTMLElement) => {
            const innerText = el.innerText;
            if (innerText.trim() !== '') {
                return innerText;
            }

            // some sites dump their cookie notices into iframes
            const iframes = el.querySelectorAll('iframe');
            for (const iframe of iframes) {
                const innerText = await (window as any).extractFrameText(iframe);
                if (innerText.trim() !== '') {
                    return innerText;
                }
            }

            return '';
        };

        // Helper function to generate a unique CSS selector for an element
        function getCssSelector(el: HTMLElement): string {
            if (el.id) {
                return `#${el.id}`;
            }

            const path: string[] = [];
            while (el.parentElement) {
                let selector = el.tagName.toLowerCase();

                // Add classes (but not too many to keep selector reasonable)
                const classes = Array.from(el.classList).slice(0, 2);
                if (classes.length) {
                    selector += `.${classes.join('.')}`;
                }

                path.unshift(selector);
                el = el.parentElement;
            }

            return path.join(' > ');
        }

        /**
         * Given a "minimum viable cookie notice", i.e. some element that fully contains the text
         * of a cookie notice and nothing further, collect:
         * - the furthest ancestor element that **should** be hidden in addition to the notice (for e.g. overlays)
         * - the furthest ancestor element that **can** be safely hidden without removing important page content
         * - a number representing the tree depth between the previous two elements
         * - any CSS `id`s within the tree between the previous two elements
         */
        const expandDetectedCookieNotice = (node: HTMLElement) => {
            const windowRect = {
                left: 0,
                right: window.innerWidth,
                top: 0,
                bottom: window.innerHeight,
            };

            let outermostHideableElement = node;
            let innermostHideableElement = node;
            // Begin by looking upwards in the DOM for the outermost element that _can_ be hidden.
            // When traversing upwards, this is the last element that adds no additional content to the
            // original notice's `innerText`.
            while (
                outermostHideableElement.parentElement &&
                outermostHideableElement.parentElement.innerText.trim() === node.innerText.trim()
            ) {
                outermostHideableElement = outermostHideableElement.parentElement;
                // In the meantime, look for the innermost element that _should_ be hidden.
                // While traversing upwards, this is either the first element, or the last element that has:
                // - full screen dimensions, AND
                // - a blur filter and/or semi-transparent background style
                const style = getComputedStyle(outermostHideableElement);
                const nodeRect = outermostHideableElement.getBoundingClientRect();
                if (
                    nodeRect.left === windowRect.left &&
                    nodeRect.right === windowRect.right &&
                    nodeRect.top === windowRect.top &&
                    nodeRect.bottom === windowRect.bottom &&
                    (style.backgroundColor.startsWith('rgba(') || style.backdropFilter !== 'none')
                ) {
                    innermostHideableElement = outermostHideableElement;
                }
            }
            return {
                innermostHideableElement,
                outermostHideableElement,
            };
        };

        // Collect fixed/sticky positioned elements that are visible
        let elements = collectMatchingElements((e) => {
            if (e.tagName === 'BODY') return false;
            const computedStyle = window.getComputedStyle(e).position;
            return (computedStyle === 'fixed' || computedStyle === 'sticky') && isVisible(e);
        });

        // Filter out elements with many first party links (likely a nav)
        const thisDomain = getETLDP1(window.location.host);
        elements = elements.filter((e) => hasManyFirstPartyLinks(thisDomain, e));

        // Get non-parent elements
        elements = nonParentElements(elements);

        // Return the candidates with their text content and some metadata
        return Promise.all(
            elements.map(async (e) => ({
                text: await getText(e),
                selector: getCssSelector(e),
                boundingBox: e.getBoundingClientRect().toJSON(),
                innermostHideableElementSelector: getCssSelector(expandDetectedCookieNotice(e).innermostHideableElement),
            })),
        );
    });

    return candidates;
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const ClassificationResponse = z.object({
    isCookieNotice: z.boolean(),
});

async function classifyCookieNotice(candidates: CandidateNotice[]): Promise<CandidateNotice | null> {
    const systemPrompt = `Your task is to classify text from the innerText property of HTML overlay elements.

An overlay element is considered to be a "cookie consent notice" if it meets all of these criteria:
1. it explicitly notifies the user of the site's use of cookies or other storage technology, such as: "We use cookies...", "This site uses...", etc.
2. it offers the user choices for the usage of cookies on the site, such as: "Accept", "Reject", "Learn More", etc., or informs the user that their use of the site means they accept the usage of cookies.

Note: This definition does not include adult content notices or any other type of notice that is primarily focused on age verification or content restrictions. Cookie consent notices are specifically intended to inform users about the website's use of cookies and obtain their consent for such use.

Note: A cookie consent notice should specifically relate to the site's use of cookies or other storage technology that stores data on the user's device, such as HTTP cookies, local storage, or session storage. Requests for permission to access geolocation information, camera, microphone, etc., do not fall under this category.

Note: Do NOT classify a website header or footer as a "cookie consent notice". Website headers or footers may contain a list of links, possibly including a privacy policy, cookie policy, or terms of service document, but their primary purpose is navigational rather than informational.`;

    for (const candidate of candidates) {
        const innerText = candidate.text.trim();
        if (!innerText) continue;

        const MAX_LENGTH = 500;
        let innerTextSnippet = innerText.slice(0, MAX_LENGTH);
        let ifTruncated = '';
        if (innerTextSnippet.length !== innerText.length) {
            innerTextSnippet += '...';
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
${innerTextSnippet}
\`\`\`

Is the overlay element above considered to be a "cookie consent notice"? Provide your answer as a boolean.`,
                    },
                ],
                response_format: zodResponseFormat(ClassificationResponse, 'classification'),
            });

            const result = completion.choices[0].message.parsed;

            if (result.isCookieNotice) {
                return candidate;
            }
        } catch (error) {
            console.error('Error classifying candidate:', error);
            continue;
        }
    }

    return null;
}

async function analyzeCookieNotice(page: Page, notice: CandidateNotice): Promise<NoticeAction[]> {
    return [];
}

async function generateRule(domain: string, notice: CandidateNotice): Promise<AutoConsentCMPRule> {
    return {
        name: domain,
        cosmetic: true,
        prehideSelectors: [notice.innermostHideableElementSelector],
        detectCmp: [
            {
                exists: notice.selector,
            },
        ],
        detectPopup: [
            {
                visible: notice.selector,
            },
        ],
        optIn: [],
        optOut: [
            {
                hide: notice.innermostHideableElementSelector,
            },
        ],
    };
}

async function main() {
    const url = process.argv[2];
    const mode = process.argv[3];

    if (!url) {
        console.log('Usage: generate-rule <URL> [detection-data|analysis-data]');
        process.exit(1);
    }

    const domain = new URL(url).hostname.replace('www.', '');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        console.log('Navigating to ' + url);
        await page.goto(url, { waitUntil: 'networkidle' });

        // Detection phase
        console.log('Detecting candidate notices');
        const candidates = await detectCandidateNotices(page);
        console.log('Found', candidates.length, 'candidates');

        if (mode === 'detection-data') {
            const outputDir = path.join(process.cwd(), 'generate-rule-data/detection-data');
            await fs.mkdir(outputDir, { recursive: true });
            await fs.writeFile(path.join(outputDir, domain + '.json'), JSON.stringify(candidates, null, 2));
            console.log('Wrote detection data to', path.join(outputDir, domain + '.json'));
            return;
        }

        // Use OpenAI to verify cookie notices
        console.log('Classifying candidate notices');
        const cookieNotice = await classifyCookieNotice(candidates);

        if (!cookieNotice) {
            console.log('No cookie notice detected');
            return;
        }

        console.log('Found a cookie notice', cookieNotice);

        // // Analysis phase
        // const actions = await analyzeCookieNotice(page, cookieNotice);

        // if (mode === 'analysis-data') {
        //     await fs.writeFile(path.join(process.cwd(), 'analysis-data.json'), JSON.stringify(actions, null, 2));
        //     return;
        // }

        // Generate rule
        const rule = await generateRule(domain, cookieNotice);

        const outputDir = path.join(process.cwd(), 'generate-rule-data/rules');
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(path.join(outputDir, domain + '.json'), JSON.stringify(rule, null, 2));
    } finally {
        await browser.close();
    }
}

main().catch(console.error);
