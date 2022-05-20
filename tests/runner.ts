import fs from "fs";
import path from 'path';
import { test, expect, Page, Frame } from "@playwright/test";
import { waitFor } from "../lib/utils";

const testRegion = (process.env.REGION || "NA").trim();

type TestOptions = {
  testOptOut: boolean;
  testSelfTest: boolean;
  skipRegions?: string[];
};
const defaultOptions: TestOptions = {
  testOptOut: true,
  testSelfTest: true,
  skipRegions: [],
};

const contentScript = fs.readFileSync(
  path.join(__dirname, "../dist/autoconsent.playwright.js"),
  "utf8"
);

export async function injectContentScript(page: Page | Frame) {
  try {
    await page.evaluate(contentScript);
  } catch (e) {
    // frame was detached
    // console.log(e);
  }
}

export function generateTest(
  url: string,
  expectedCmp: string,
  options: TestOptions = { testOptOut: true, testSelfTest: true }
) {
  test(`${url.split("://")[1]} .${testRegion}`, async ({ page }) => {
    if (options.skipRegions && options.skipRegions.indexOf(testRegion) !== -1) {
      test.skip();
    }
    await page.goto(url, { waitUntil: "commit" });

    // set up a messaging function
    const received = [];
    async function messageCallback({ frame }, msg) {
      received.push(msg);
      if (msg.type === 'optOutResult' && options.testSelfTest) {
        await frame.evaluate(`autoconsentReceiveMessage({ type: "selfTest" })`);
      }
    }
    await page.exposeBinding("autoconsentSendMessage", messageCallback);

    // inject content scripts into every frame
    await injectContentScript(page);
    page.frames().forEach(injectContentScript);
    page.on("framenavigated", injectContentScript);

    // wait for all messages and assertions
    await waitFor(() => received.length > 0, 100, 500);
    expect(received[0]).toEqual({ type: "popupFound", cmp: expectedCmp });
    if (options.testOptOut) {
      await waitFor(() => received.length > 1, 50, 500);
      expect(received[1]).toEqual({ type: "optOutResult", result: true });
    }
    if (options.testSelfTest) {
      await waitFor(() => received.length > 2, 50, 500);
      expect(received[2]).toEqual({ type: "selfTestResult", result: true });
    }
  });
}

export default function generateCMPTests(
  cmp: string,
  sites: string[],
  options: Partial<TestOptions> = {}
) {
  test.describe(cmp, () => {
    sites.forEach((url) => {
      generateTest(url, cmp, Object.assign({}, defaultOptions, options));
    });
  });
}
