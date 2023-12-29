import { enableLogs } from "./config";
import { ElementSelector, HideMethod, VisibilityCheck } from "./rules";
import { getStyleElement, hideElements, isElementVisible, waitFor } from "./utils";

export function click(selector: ElementSelector, all = false): boolean {
  const elem = elementSelector(selector)
  enableLogs && console.log("[click]", selector, all, elem);
  if (elem.length > 0) {
    if (all) {
      elem.forEach((e) => e.click());
    } else {
      elem[0].click();
    }
  }
  return elem.length > 0;
}

export function elementExists(selector: ElementSelector): boolean {
  const exists = elementSelector(selector).length > 0;
  // enableLogs && console.log("[exists?]", selector, exists);
  return exists;
}

export function elementVisible(selector: ElementSelector, check: VisibilityCheck): boolean {
  const elem = elementSelector(selector);
  const results = new Array(elem.length);
  elem.forEach((e, i) => {
    // check for display: none
    results[i] = isElementVisible(e);
  });
  // enableLogs && console.log("[visible?]", selector, check, elem, results);
  if (check === "none") {
    return results.every(r => !r);
  } else if (results.length === 0) {
    return false;
  } else if (check === "any") {
    return results.some(r => r);
  }
  // all
  return results.every(r => r);
}

export function waitForElement(selector: ElementSelector, timeout = 10000): Promise<boolean> {
  const interval = 200;
  const times = Math.ceil((timeout) / interval);
  enableLogs && console.log("[waitForElement]", selector);
  return waitFor(
    () => elementSelector(selector).length > 0,
    times,
    interval
  );
}

export function waitForVisible(selector: ElementSelector, timeout = 10000, check: VisibilityCheck = 'any'): Promise<boolean> {
  const interval = 200;
  const times = Math.ceil((timeout) / interval);
  // enableLogs && console.log("[waitForVisible]", ruleStep.waitFor);
  return waitFor(
    () => elementVisible(selector, check),
    times,
    interval
  );
}

export async function waitForThenClick(selector: ElementSelector, timeout = 10000, all = false): Promise<boolean> {
  // enableLogs && console.log("[waitForThenClick]", ruleStep.waitForThenClick);
  await waitForElement(selector, timeout);
  return click(selector, all);
}

export function wait(ms: number): Promise<true> {
  // enableLogs && console.log(`waiting for ${ruleStep.wait}ms`);
  return new Promise(resolve => {
    setTimeout(() => {
      // enableLogs && console.log(`done waiting`);
      resolve(true);
    }, ms);
  });
}

export function hide(selectors: string[], method: HideMethod): boolean {
  // enableLogs && console.log("[hide]", ruleStep.hide, ruleStep.method);
  const styleEl = getStyleElement();
  return hideElements(styleEl, selectors, method);
}

export function prehide(selectors: string[]): boolean {
  const styleEl = getStyleElement('autoconsent-prehide');
  enableLogs && console.log("[prehide]", styleEl, location.href);
  return hideElements(styleEl, selectors, "opacity");
}

export function undoPrehide(): boolean {
  const existingElement = getStyleElement('autoconsent-prehide');
  enableLogs && console.log("[undoprehide]", existingElement, location.href);
  if (existingElement) {
    existingElement.remove();
  }
  return !!existingElement;
}

export function querySingleReplySelector(selector: string, parent: any = document): HTMLElement[] {
  if (selector.startsWith('aria/')) {
    return []
  }
  if (selector.startsWith('xpath/')) {
    const xpath = selector.slice(6)
    const result = document.evaluate(xpath, parent, null, XPathResult.ANY_TYPE, null)
    let node: Node = null
    const elements: HTMLElement[] = []
    // eslint-disable-next-line no-cond-assign
    while (node = result.iterateNext()) {
      elements.push(node as HTMLElement)
    }
    return elements
  }
  if (selector.startsWith('text/')) {
    return []
  }
  if (selector.startsWith('pierce/')) {
    return []
  }
  if (parent.shadowRoot) {
    return Array.from(parent.shadowRoot.querySelectorAll(selector))
  }
  return Array.from(parent.querySelectorAll(selector))
}

export function querySelectorChain(selectors: string[]): HTMLElement[] {
  let parent: ParentNode = document
  let matches: HTMLElement[]
  for (const selector of selectors) {
    matches = querySingleReplySelector(selector, parent)
    if (matches.length === 0) {
      return []
    }
    parent = matches[0]
  }
  return matches;
}

export function elementSelector(selector: ElementSelector): HTMLElement[] {
  if (typeof selector === 'string') {
    return querySingleReplySelector(selector)
  }
  return querySelectorChain(selector)
}