import browser from 'webextension-polyfill';
import { waitFor } from '../cmps/base';

export default class TabActions {
  constructor(tabId, url, frame) {
    this.id = tabId;
    this.url = url;
    this.frame = frame;
  }

  async elementExists(selector, frameId = 0) {
    // console.log(`check for  ${selector} in tab ${this.id}, frame ${frameId}`);
    return browser.tabs.sendMessage(this.id, {
      type: 'elemExists',
      selector,
    }, {
      frameId,
    });
  }

  async clickElement(selector, frameId = 0) {
    // console.log(`click element ${selector} in tab ${this.id}`);
    return browser.tabs.sendMessage(this.id, {
      type: 'click',
      selector,
    }, {
      frameId,
    });
  }

  async clickElements(selector, frameId = 0) {
    // console.log(`click elements ${selector} in tab ${this.id}`);
    return browser.tabs.sendMessage(this.id, {
      type: 'click',
      all: true,
      selector,
    }, {
      frameId,
    });
  }

  async elementsAreVisible(selector, check, frameId = 0) {
    return browser.tabs.sendMessage(this.id, {
      type: 'elemVisible',
      selector,
      check,
    }, {
      frameId,
    });
  }

  async getAttribute(selector, attribute, frameId) {
    return browser.tabs.sendMessage(this.id, {
      type: 'getAttribute',
      selector,
      attribute,
    }, { frameId });
  }

  async eval(script, frameId = 0) {
    // console.log(`run ${script} in tab ${this.id}`);
    return browser.tabs.sendMessage(this.id, {
      type: 'eval',
      script,
    }, { frameId });
  }

  async waitForElement(selector, timeout, frameId = 0) {
    const interval = 200;
    const times = Math.ceil(timeout / interval);
    return waitFor(() => this.elementExists(selector, frameId), times, interval);
  }

  async hideElements(selectors, frameId = 0) {
    return browser.tabs.sendMessage(this.id, {
      type: 'hide',
      selectors,
    }, { frameId });
  }

  async getBrowserTab() {
    return browser.tabs.get(this.id);
  }

  async goto(url) {
    return browser.tabs.update(this.id, { url });
  }

  get browser() {
    return browser;
  }
}
