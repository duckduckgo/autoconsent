import { waitFor } from '../cmps/base';

export default class Tab {
  constructor(page, url, frames) {
    this.page = page;
    this.url = url;
    this.frames = frames;
  }

  async elementExists(selector, frameId = 0) {
    try {
      const elements = await this.frames[frameId].$$(selector)
      return elements.length > 0;
    } catch (e) {
      return false;
    }
  }

  async clickElement(selector, frameId = 0) {
    if (await this.elementExists(selector, frameId)) {
      try {
        return await this.frames[frameId].click(selector);
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  async clickElements(selector, frameId = 0) {
    const elements = await this.frames[frameId].$$(selector);
    try {
      await Promise.all(elements.map(elem => elem.click()));
      return true;
    } catch (e) {
      return false;
    }
  }

  async elementsAreVisible(selector, check, frameId = 0) {
    if (!await this.elementExists(selector, frameId)) {
      return false;
    }
    const visible = await this.frames[frameId].$$eval(selector, nodes => nodes.map(n => n.offestParent !== null));
    if (visible.length === 0) {
      return false;
    } else if (check === 'any') {
      return visible.some(r => r);
    } else if (check === 'none') {
      return visible.every(r => !r);
    }
    return visible.every(r => r);
  }

  async getAttribute(selector, attribute, frameId = 0) {
    const elem = await this.frames[frameId].$(selector);
    if (elem) {
      return (await elem.getProperty(attribute)).jsonValue();
    }
  }

  async eval(script, frameId = 0) {
    return await this.frames[frameId].evaluate(script);
  }

  async waitForElement(selector, timeout, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(() => this.elementExists(selector, frameId), times, interval);
  }

  async waitForThenClick(selector, timeout, frameId = 0) {
    await this.waitForElement(selector, timeout, frameId);
    await this.clickElement(selector, frameId);
  }

  async hideElements(selectors, frameId = 0) {
  }

  async sendKeyEvent(selector, eventType, keyCode, charCode = 0, frameId = 0) {
  }

  async goto(url) {
    return this.page.goto(url);
  }

  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), ms);
    });
  }
}