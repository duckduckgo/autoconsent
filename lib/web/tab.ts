import { waitFor } from "../cmps/base";
import { TabActor, MessageSender, Browser } from "../types";

export default class TabActions implements TabActor {
  id: number;

  constructor(
    tabId: number,
    public frame: any,
    private sendContentMessage: MessageSender,
    private browser: Browser
  ) {
    this.id = tabId;
  }

  async elementExists(selector: string, frameId = 0) {
    console.log(`check for  ${selector} in tab ${this.id}, frame ${frameId}`);
    return this.sendContentMessage(
      this.id,
      {
        type: "elemExists",
        selector
      },
      {
        frameId
      }
    );
  }

  async clickElement(selector: string, frameId = 0) {
    console.log(`click element ${selector} in tab ${this.id}`);
    return this.sendContentMessage(
      this.id,
      {
        type: "click",
        selector
      },
      {
        frameId
      }
    );
  }

  async clickElements(selector: string, frameId = 0) {
    console.log(`click elements ${selector} in tab ${this.id}`);
    return this.sendContentMessage(
      this.id,
      {
        type: "click",
        all: true,
        selector
      },
      {
        frameId
      }
    );
  }

  async elementsAreVisible(selector: string, check?: 'all' | 'any' | 'none', frameId = 0) {
    return this.sendContentMessage(
      this.id,
      {
        type: "elemVisible",
        selector,
        check
      },
      {
        frameId
      }
    );
  }

  async getAttribute(selector: string, attribute: string, frameId = 0) {
    return this.sendContentMessage(
      this.id,
      {
        type: "getAttribute",
        selector,
        attribute
      },
      { frameId }
    );
  }

  async eval(script: string, frameId = 0) {
    // console.log(`run ${script} in tab ${this.id}`);
    return await this.sendContentMessage(
      this.id,
      {
        type: "eval",
        script
      },
      { frameId }
    );
  }

  async waitForElement(selector: string, timeout: number, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(
      () => this.elementExists(selector, frameId),
      times,
      interval
    );
  }

  async waitForThenClick(selector: string, timeout: number, frameId = 0) {
    if (await this.waitForElement(selector, timeout, frameId)) {
      return await this.clickElement(selector, frameId);
    }
    return false;
  }

  async hideElements(selectors: string[], frameId = 0) {
    return this.sendContentMessage(
      this.id,
      {
        type: "hide",
        selectors
      },
      { frameId }
    );
  }

  async undoHideElements(frameId = 0): Promise<boolean> {
    return this.sendContentMessage(
      this.id,
      {
        type: "undohide",
      },
      { frameId }
    );
  }

  async getBrowserTab() {
    return this.browser.tabs.get(this.id);
  }

  async goto(url: string) {
    return this.browser.tabs.update(this.id, { url });
  }

  wait(ms: number): Promise<true> {
    return new Promise(resolve => {
      setTimeout(() => resolve(true), ms);
    });
  }

  matches(matcherConfig: any) {
    return this.sendContentMessage(
      this.id,
      {
        type: "matches",
        config: matcherConfig
      },
      { frameId: 0 }
    );
  }

  executeAction(config: any, param?: any): Promise<boolean> {
    return this.sendContentMessage(
      this.id,
      {
        type: "executeAction",
        config,
        param
      },
      { frameId: 0 }
    );
  }
}
