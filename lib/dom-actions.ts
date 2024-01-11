import { ElementSelector, HideMethod, VisibilityCheck } from "./rules";
import { DomActionsProvider } from "./types";
import { getStyleElement, hideElements, isElementVisible, waitFor } from "./utils";
import AutoConsent from "./web";

export class DomActions implements DomActionsProvider {
  constructor(public autoconsentInstance: AutoConsent) { }

  click(selector: ElementSelector, all = false): boolean {
    const elem = this.elementSelector(selector)
    this.autoconsentInstance.config.logs.rulesteps && console.log("[click]", selector, all, elem);
    if (elem.length > 0) {
      if (all) {
        elem.forEach((e) => e.click());
      } else {
        elem[0].click();
      }
    }
    return elem.length > 0;
  }

  elementExists(selector: ElementSelector): boolean {
    const exists = this.elementSelector(selector).length > 0;
    return exists;
  }

  elementVisible(selector: ElementSelector, check: VisibilityCheck): boolean {
    const elem = this.elementSelector(selector);
    const results = new Array(elem.length);
    elem.forEach((e, i) => {
      // check for display: none
      results[i] = isElementVisible(e);
    });
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

  waitForElement(selector: ElementSelector, timeout = 10000): Promise<boolean> {
    const interval = 200;
    const times = Math.ceil((timeout) / interval);
    this.autoconsentInstance.config.logs.rulesteps && console.log("[waitForElement]", selector);
    return waitFor(
      () => this.elementSelector(selector).length > 0,
      times,
      interval
    );
  }

  waitForVisible(selector: ElementSelector, timeout = 10000, check: VisibilityCheck = 'any'): Promise<boolean> {
    const interval = 200;
    const times = Math.ceil((timeout) / interval);
    return waitFor(
      () => this.elementVisible(selector, check),
      times,
      interval
    );
  }

  async waitForThenClick(selector: ElementSelector, timeout = 10000, all = false): Promise<boolean> {
    await this.waitForElement(selector, timeout);
    return this.click(selector, all);
  }

  wait(ms: number): Promise<true> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  hide(selector: string, method: HideMethod): boolean {
    const styleEl = getStyleElement();
    return hideElements(styleEl, selector, method);
  }

  prehide(selector: string): boolean {
    const styleEl = getStyleElement('autoconsent-prehide');
    this.autoconsentInstance.config.logs.lifecycle && console.log("[prehide]", styleEl, location.href);
    return hideElements(styleEl, selector, "opacity");
  }

  undoPrehide(): boolean {
    const existingElement = getStyleElement('autoconsent-prehide');
    this.autoconsentInstance.config.logs.lifecycle && console.log("[undoprehide]", existingElement, location.href);
    if (existingElement) {
      existingElement.remove();
    }
    return !!existingElement;
  }

  querySingleReplySelector(selector: string, parent: any = document): HTMLElement[] {
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

  querySelectorChain(selectors: string[]): HTMLElement[] {
    let parent: ParentNode = document
    let matches: HTMLElement[]
    for (const selector of selectors) {
      matches = this.querySingleReplySelector(selector, parent)
      if (matches.length === 0) {
        return []
      }
      parent = matches[0]
    }
    return matches;
  }

  elementSelector(selector: ElementSelector): HTMLElement[] {
    if (typeof selector === 'string') {
      return this.querySingleReplySelector(selector)
    }
    return this.querySelectorChain(selector)
  }
}
