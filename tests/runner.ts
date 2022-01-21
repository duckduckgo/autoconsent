import fs from 'fs/promises';
import path from 'path';
import { test, expect } from '@playwright/test';
import * as autoconsent from '../dist/autoconsent.puppet';
import * as extraRules from '../rules/rules.json';

enum Region {
    EU,
    US,
    GB,
}
const ALL_REGIONS = [Region.EU, Region.US, Region.GB]
// Describes a test case:
// - URL
// - Expected CMP
// - Regions where we should skip this test
// - Should test for successful opt-out
// - Should test self-test
type SiteCMPTest = [string, string, boolean?, boolean?, Region[]?]

const consentomatic = extraRules.consentomatic;
const rules = [
    ...autoconsent.rules,
    ...Object.keys(consentomatic).map(name => new autoconsent.ConsentOMaticCMP(`com_${name}`, consentomatic[name])),
    ...extraRules.autoconsent.map(spec => autoconsent.createAutoCMP(spec)),
];
const screenshotDir = `./screenshots`;

async function ensureScreenshotDir() {
    try {
        await fs.stat(screenshotDir);
    } catch(e) {
        await fs.mkdir(screenshotDir);
    }
}

export function generateTest(url: string, expectedCmp: string, testOptOut = true, testSelfTest = true) {
    test(`${expectedCmp}.${url.split('://')[1]}`, async ({ page }) => {
        await page.goto(url);

        try {
            const tab = autoconsent.attachToPage(page, url, rules, 4);
            await tab.checked;
            expect(tab.getCMPName()).toBe(expectedCmp);
            expect(await tab.isPopupOpen()).toBeTruthy();
            if (testOptOut) {
                expect(await tab.doOptOut()).toBeTruthy();
            }
            if (testSelfTest) {
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

export default function generateCMPTests(specs: SiteCMPTest[]) {
    specs.forEach((spec: SiteCMPTest) => {
        const [url, expectedCmp, testOptOut = true, testSelfTest = true, regions = []] = spec;
        generateTest(url, expectedCmp, testOptOut, testSelfTest);
    });
}
