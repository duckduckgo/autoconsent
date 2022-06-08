import { enableLogs } from "./config";
import { requestEval } from "./eval-handler";
import { ClickRule, ElementExistsRule, ElementVisibleRule, EvalRule, HideRule, WaitForRule, WaitForThenClickRule, WaitRule } from "./rules";
import { getStyleElement, hideElements, isElementVisible, waitFor, waitMs } from "./utils";

export function doEval(ruleStep: EvalRule): Promise<boolean> {
  return requestEval(ruleStep.eval);
}

export function click(ruleStep: ClickRule): boolean {
  const elem = document.querySelectorAll<HTMLElement>(ruleStep.click);
  enableLogs && console.log("[click]", ruleStep.click, elem);
  if (elem.length > 0) {
    if (ruleStep.all === true) {
      elem.forEach((e) => e.click());
    } else {
      elem[0].click();
    }
  }
  return elem.length > 0;
}

export function elementExists(ruleStep: ElementExistsRule): boolean {
  const exists = document.querySelector(ruleStep.exists) !== null;
  // enableLogs && console.log("[exists?]", ruleStep.exists, exists);
  return exists;
}

export function elementVisible(ruleStep: ElementVisibleRule): boolean {
  const elem = document.querySelectorAll<HTMLElement>(ruleStep.visible);
    const results = new Array(elem.length);
    elem.forEach((e, i) => {
      // check for display: none
      results[i] = isElementVisible(e);
    });
    // enableLogs && console.log("[visible?]", ruleStep.visible, elem, results);
    if (results.length === 0) {
      return false;
    } else if (ruleStep.check === "any") {
      return results.some(r => r);
    } else if (ruleStep.check === "none") {
      return results.every(r => !r);
    }
    // all
    return results.every(r => r);
}

export function waitForElement(ruleStep: WaitForRule): Promise<boolean> {
  const interval = 200;
  const times = Math.ceil((ruleStep.timeout || 10000) / interval);
  // enableLogs && console.log("[waitFor]", ruleStep.waitFor);
  return waitFor(
    () => document.querySelector(ruleStep.waitFor) !== null,
    times,
    interval
  );
}

export async function waitForThenClick(ruleStep: WaitForThenClickRule): Promise<boolean> {
  // enableLogs && console.log("[waitForThenClick]", ruleStep.waitForThenClick);
  await waitForElement({ ...ruleStep, waitFor: ruleStep.waitForThenClick });
  return click({ ...ruleStep, click: ruleStep.waitForThenClick });
}

export async function wait(ruleStep: WaitRule): Promise<true> {
  // enableLogs && console.log(`waiting for ${ruleStep.wait}ms`);
  await waitMs(ruleStep.wait);
  // enableLogs && console.log(`done waiting`);
  return true;
}

export function hide(ruleStep: HideRule): boolean {
  // enableLogs && console.log("[hide]", ruleStep.hide, ruleStep.method);
  const styleEl = getStyleElement();
  return hideElements(styleEl, ruleStep.hide, ruleStep.method);
}

export function prehide(selectors: string[]): boolean {
  enableLogs && console.log("[prehide]", selectors);
  const styleEl = getStyleElement('autoconsent-prehide');
  return hideElements(styleEl, selectors, "opacity");
}

export function undoPrehide(): boolean {
  const existingElement = getStyleElement('autoconsent-prehide');
  enableLogs && console.log("[undoprehide]", existingElement);
  if (existingElement) {
    existingElement.remove();
  }
  return !!existingElement;
}
