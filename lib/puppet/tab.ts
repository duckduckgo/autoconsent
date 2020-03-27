import { waitFor } from '../cmps/base';
import { TabActor, FindResult } from '../types';

export default class Tab implements TabActor {
  // puppeteer doesn't have tab IDs
  id = 1
  page: any
  url: any
  frames: { [id: number]: any }

  constructor(page: any, url: string, frames: any) {
    this.page = page;
    this.url = url;
    this.frames = frames;
  }

  async elementExists(selector: string, frameId = 0) {
    try {
      const elements = await this.frames[frameId].$$(selector)
      return elements.length > 0;
    } catch (e) {
      return false;
    }
  }

  async clickElement(selector: string, frameId = 0) {
    if (await this.elementExists(selector, frameId)) {
      try {
        return await this.frames[frameId].click(selector);
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  async clickElements(selector: string, frameId = 0) {
    const elements = await this.frames[frameId].$$(selector);
    try {
      await Promise.all(elements.map((elem: any) => elem.click()));
      return true;
    } catch (e) {
      return false;
    }
  }

  async elementsAreVisible(selector: string, check: 'all' | 'any' | 'none', frameId = 0) {
    if (!await this.elementExists(selector, frameId)) {
      return false;
    }
    const visible: boolean[] = await this.frames[frameId].$$eval(selector, (nodes: any) => nodes.map((n: any) => n.offestParent !== null));
    if (visible.length === 0) {
      return false;
    } else if (check === 'any') {
      return visible.some((r => r);
    } else if (check === 'none') {
      return visible.every(r => !r);
    }
    return visible.every(r => r);
  }

  async getAttribute(selector: string, attribute: string, frameId = 0) {
    const elem = await this.frames[frameId].$(selector);
    if (elem) {
      return (await elem.getProperty(attribute)).jsonValue();
    }
  }

  async eval(script: string, frameId = 0) {
    return await this.frames[frameId].evaluate(script);
  }

  async waitForElement(selector: string, timeout: number, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(() => this.elementExists(selector, frameId), times, interval);
  }

  async waitForThenClick(selector: string, timeout: number, frameId = 0) {
    await this.waitForElement(selector, timeout, frameId);
    await this.clickElement(selector, frameId);
    return true;
  }

  async hideElements(selectors: string[], frameId = 0) {
    return Promise.resolve(false)
  }

  async goto(url: string) {
    return this.page.goto(url);
  }

  wait(ms: number): Promise<true> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), ms);
    });
  }
 
  matches(options: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  executeAction(config: any, param?: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}