/**
 * Utility script to get the contents of a specific element for multiple locales
 */
import { chromium } from "@playwright/test";

const locales = ["en-US", "en-GB", "de-DE", "fr-FR", "es-ES"];
if (process.argv.length < 4) {
  console.log('Usage: npm run get-text-for-xpath -- <URL> <XPATH>')
  process.exit(0)
}
const url = process.argv[2];
const xpath = process.argv[3];
console.log(`Checking contents of ${xpath} on ${url}`);

(async () => {
  const browser = await chromium.launch();
  for (const locale of locales) {
    const context = await browser.newContext({ locale });
    const page = await context.newPage();
    await page.goto(url, {
      waitUntil: "networkidle",
    });
    const locator = page.locator(`xpath=${xpath}`);
    console.log(locale, await locator.textContent());
    await page.close();
    await context.close();
  }
  await browser.close();
})();
