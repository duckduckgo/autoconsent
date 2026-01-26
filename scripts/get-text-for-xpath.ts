/**
 * Utility script to get the contents of a specific element for multiple locales
 */
import { chromium } from '@playwright/test';
import { Command } from 'commander';

// list of locales supported by DDG apps and extensions
const locales = [
    'bg',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'hr',
    'hu',
    'it',
    'lt',
    'lv',
    'nb',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'tr',
];

const program = new Command();
program
    .name('get-text-for-xpath')
    .description('Get the contents of a specific element for multiple locales')
    .argument('<url>', 'URL to check')
    .argument('<xpath>', 'XPath selector for the element')
    .option('-s, --sequential', 'Run locale checks sequentially instead of in parallel')
    .parse();

const [url, xpath] = program.args;
const options = program.opts<{ sequential?: boolean }>();
const values = new Set();
console.log(`Checking contents of ${xpath} on ${url}`);
if (options.sequential) {
    console.log('Running in sequential mode');
}

(async () => {
    const browser = await chromium.launch({ headless: false });

    async function checkLocale(locale: string) {
        const context = await browser.newContext({ locale });
        const page = await context.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle',
            timeout: 30000,
        });

        // add extra interactions here if necessary, e.g.
        // await page.locator('.my-button').click();
        // await page.waitForTimeout(1000);

        const locator = page.locator(`xpath=${xpath}`);
        const content = await locator.textContent();
        console.log(locale, content);
        values.add(content);
        await page.close();
        await context.close();
    }

    async function checkLocaleWithRetry(locale: string) {
        try {
            await checkLocale(locale);
        } catch (e) {
            console.warn(`Failed on locale ${locale}, retrying...`, e);
            await checkLocale(locale);
        }
    }

    if (options.sequential) {
        // Run sequentially
        for (const locale of locales) {
            await checkLocaleWithRetry(locale);
        }
    } else {
        // Run in parallel
        const crawls = locales.map((locale) => checkLocaleWithRetry(locale));
        await Promise.all(crawls);
    }

    await browser.close();
    console.log('Final set of strings:');
    console.log([...values]);
    console.log('Example xpath rule:');
    const containsClause = [...values].map((v) => `contains(., '${v}')`).join(' or ');
    console.log(`xpath///span[${containsClause}]`);
})();
