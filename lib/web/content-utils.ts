import { enableLogs } from "../config";
import { ClickRule, ElementExistsRule, ElementVisibleRule, EvalRule, HideMethod, HideRule, UndoHideRule, WaitForRule, WaitForThenClickRule, WaitRule } from "../rules";

// get or create a style container for CSS overrides
export function getStyleElementUtil(): HTMLStyleElement {
  const styleOverrideElementId = "autoconsent-css-rules";
  const styleSelector = `style#${styleOverrideElementId}`;
  const existingElement = document.querySelector(styleSelector);
  if (existingElement && existingElement instanceof HTMLStyleElement) {
    return existingElement;
  } else {
    const parent =
      document.head ||
      document.getElementsByTagName("head")[0] ||
      document.documentElement;
    const css = document.createElement("style");
    css.id = styleOverrideElementId;
    parent.appendChild(css);
    return css;
  }
}

// hide elements with a CSS rule
export function hideElementsUtil(
  selectors: string[],
  method: HideMethod
): boolean {
  const hidingSnippet = method === "display" ? `display: none` : `opacity: 0`;
  const rule = `${selectors.join(
    ","
  )} { ${hidingSnippet} !important; z-index: -1 !important; pointer-events: none !important; } `;
  const styleEl = getStyleElementUtil();
  if (styleEl instanceof HTMLStyleElement) {
    styleEl.innerText += rule;
    return selectors.length > 0;
  }
  return false;
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
  enableLogs && console.log("[exists?]", ruleStep.exists, exists);
  return exists;
}

export function elementVisible(ruleStep: ElementVisibleRule): boolean {
  const elem = document.querySelectorAll<HTMLElement>(ruleStep.visible);
    const results = new Array(elem.length);
    elem.forEach((e, i) => {
      // check for display: none
      results[i] = false;
      if (e.offsetParent !== null) {
        results[i] = true;
      } else {
        const css = window.getComputedStyle(e);
        if (css.position === 'fixed' && css.display !== "none") { // fixed elements may be visible even if the parent is not
          results[i] = true;
        }
      }
    });
    enableLogs && console.log("[visible?]", ruleStep.visible, elem, results);
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

export function doEval(ruleStep: EvalRule): boolean {
  // TODO: chrome support
  enableLogs && console.log("about to [eval]", ruleStep.eval); // this will not show in Webkit console
  const result = window.eval(ruleStep.eval); // eslint-disable-line no-eval
  return result;
}

export async function waitFor(predicate: () => Promise<boolean> | boolean, maxTimes: number, interval: number): Promise<boolean> {
  let result = await predicate();
  if (!result && maxTimes > 0) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(waitFor(predicate, maxTimes - 1, interval));
      }, interval);
    });
  }
  return Promise.resolve(result);
}

export function waitForElement(ruleStep: WaitForRule): Promise<boolean> {
  const interval = 200;
  const times = Math.ceil((ruleStep.timeout || 10000) / interval);
  enableLogs && console.log("[waitFor]", ruleStep.waitFor);
  return waitFor(
    () => document.querySelector(ruleStep.waitFor) !== null,
    times,
    interval
  );
}

export async function waitForThenClick(ruleStep: WaitForThenClickRule): Promise<boolean> {
  enableLogs && console.log("[waitForThenClick]", ruleStep.waitForThenClick);
  await waitForElement({ ...ruleStep, waitFor: ruleStep.waitForThenClick });
  return click({ ...ruleStep, click: ruleStep.waitForThenClick });
}

export function wait(ruleStep: WaitRule): Promise<true> {
  enableLogs && console.log(`waiting for ${ruleStep.wait}ms`);
  return new Promise(resolve => {
    setTimeout(() => {
      enableLogs && console.log(`done waiting`);
      resolve(true);
    }, ruleStep.wait);
  });
}

export function hide(ruleStep: HideRule): boolean {
  enableLogs && console.log("[hide]", ruleStep.hide, ruleStep.method);
  return hideElementsUtil(ruleStep.hide, ruleStep.method);
}

export function undoHide(): boolean {
  const existingElement = getStyleElementUtil();
  enableLogs && console.log("[unhide]", existingElement);
  if (existingElement) {
    existingElement.remove();
  }
  return !!existingElement;
}
