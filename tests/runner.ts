import fs from 'fs/promises';
import path from 'path';
import { test, expect } from '@playwright/test';
import * as autoconsent from '../dist/autoconsent.puppet';
import * as extraRules from '../rules/rules.json';

const consentomatic = extraRules.consentomatic;
const rules = [
    ...autoconsent.rules,
    ...Object.keys(consentomatic).map(name => new autoconsent.ConsentOMaticCMP(`com_${name}`, consentomatic[name])),
    ...extraRules.autoconsent.map(spec => autoconsent.createAutoCMP(spec)),
];
const screenshotDir = `./screenshots`;
const testRegion = process.env.REGION || 'NA'

async function ensureScreenshotDir() {
    try {
        await fs.stat(screenshotDir);
    } catch(e) {
        await fs.mkdir(screenshotDir);
    }
}

type TestOptions = {
    testOptOut: boolean;
    testSelfTest: boolean;
    skipRegions?: string[];
}
const defaultOptions: TestOptions = {
    testOptOut: true,
    testSelfTest: true,
    skipRegions: [],
}

export function generateTest(url: string, expectedCmp: string, options: TestOptions = { testOptOut: true, testSelfTest: true }) {
    test(`${url.split('://')[1]} .${testRegion}`, async ({ page }) => {
        await page.goto(url);
        if (options.skipRegions && options.skipRegions.indexOf(testRegion) !== -1) {
            test.skip();
        }

        try {
            const tab = autoconsent.attachToPage(page, url, rules, 4);
            await tab.checked;
            expect(tab.getCMPName()).toBe(expectedCmp);
            expect(await tab.isPopupOpen()).toBeTruthy();
            if (options.testOptOut) {
                expect(await tab.doOptOut()).toBeTruthy();
            }
            if (options.testSelfTest) {
                expect(await tab.testOptOutWorked()).toBeTruthy();
            }
        } finally {
            await ensureScreenshotDir();
            await page.screenshot({
                path: path.join(screenshotDir, `${url.replace('https://', '').replace(/\//g, '_')}.png`)
            });
        }
    });
}

export default function generateCMPTests(cmp: string, sites: string[], options: Partial<TestOptions> = {}) {
    test.describe(cmp, () => {
        sites.forEach((url) => {
            generateTest(url, cmp, Object.assign({}, defaultOptions, options));
        });
    })
}
