import { waitFor } from '../cmps/base';
import { TabActor } from '../types';
import Tools from '../web/consentomatic/tools';
import { matches } from '../web/consentomatic/index';

const DEBUG = false;

export default class Tab implements TabActor {
  // puppeteer doesn't have tab IDs
  id = 1
  page: any
  url: any
  frames: { [id: number]: any }
  frame: {
    type: string
    id: number
    url: string
  }

  constructor(page: any, url: string, frames: { [id: number]: any }) {
    this.page = page;
    this.url = url;
    this.frames = frames;
  }

  async elementExists(selector: string, frameId = 0) {
    const elements = await this.frames[frameId].$$(selector)
    DEBUG && console.log('[exists]', selector, elements.length > 0);
    return elements.length > 0;
  }

  async clickElement(selector: string, frameId = 0) {
    if (await this.elementExists(selector, frameId)) {
      try {
        const result = await this.frames[frameId].evaluate((s: string) => {
          try {
            (document.querySelector(s) as HTMLElement).click();
            return true;
          } catch (e) {
            return e.toString();
          }
        }, selector);
        DEBUG && console.log('[click]', selector, result);
        return result;
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  async clickElements(selector: string, frameId = 0) {
    const elements = await this.frames[frameId].$$(selector);
    DEBUG && console.log('[click all]', selector);
    await this.frames[frameId].evaluate((s: string) => {
      const elem = document.querySelectorAll<HTMLElement>(s);
      elem.forEach(e => e.click());
    }, selector)
    return true;
  }

  async elementsAreVisible(selector: string, check: 'all' | 'any' | 'none', frameId = 0) {
    if (!await this.elementExists(selector, frameId)) {
      return false;
    }
    const visible: boolean[] = await this.frames[frameId].$$eval(selector, (nodes: any) => nodes.map((n: any) => n.offsetParent !== null || window.getComputedStyle(n).display !== "none"));
    DEBUG && console.log('[visible]', selector, check, visible);
    if (visible.length === 0) {
      return false;
    } else if (check === 'any') {
      return visible.some(r => r);
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
    const result = await this.frames[frameId].evaluate(script);
    DEBUG && console.log('[eval]', script, result);
    return result
  }

  async waitForElement(selector: string, timeout: number, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(() => this.elementExists(selector, frameId), times, interval);
  }

  async waitForThenClick(selector: string, timeout: number, frameId = 0) {
    if (await this.waitForElement(selector, timeout, frameId)) {
      return await this.clickElement(selector, frameId);
    }
    return false;
  }

  async hideElements(selectors: string[], frameId = 0) {
    // TODO implement this
    return Promise.resolve(true)
  }

  undoHideElements(frameId?: number): Promise<boolean> {
    return Promise.resolve(true)
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
    const script = `(() => {
      const Tools = ${Tools.toString()};
      const matches = ${matches.toString()};
      return matches(${JSON.stringify(options)})
    })();
    `
    return this.frames[0].evaluate(script)
  }

  executeAction(config: any, param?: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}