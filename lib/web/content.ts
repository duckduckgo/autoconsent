import { matches, executeAction } from "./consentomatic/index";
import { ContentScriptMessage } from "../messages";
import { hideElementsUtil, getStyleElementUtil } from "./content-utils";

let actionQueue = Promise.resolve(null);

export default function handleMessage(message: ContentScriptMessage, debug = false) {
  if (message.type === "click") {
    const elem = document.querySelectorAll<HTMLElement>(message.selector);
    debug && console.log("[click]", message.selector, elem);
    if (elem.length > 0) {
      if (message.all === true) {
        elem.forEach(e => e.click());
      } else {
        elem[0].click();
      }
    }
    return elem.length > 0;
  } else if (message.type === "elemExists") {
    const exists = document.querySelector(message.selector) !== null;
    debug && console.log("[exists?]", message.selector, exists);
    return exists;
  } else if (message.type === "elemVisible") {
    const elem = document.querySelectorAll<HTMLElement>(message.selector);
    const results = new Array(elem.length);
    elem.forEach((e, i) => {
      results[i] = e.offsetParent !== null || window.getComputedStyle(e).display !== "none"; // TODO: handle visibility and z-index?
    });
    debug && console.log("[visible?]", message.selector, elem, results);
    if (results.length === 0) {
      return false;
    } else if (message.check === "any") {
      return results.some(r => r);
    } else if (message.check === "none") {
      return results.every(r => !r);
    }
    // all
    return results.every(r => r);
  } else if (message.type === "getAttribute") {
    const elem = document.querySelector(message.selector);
    debug && console.log("[getAttribute]", message.selector, elem);
    if (!elem) {
      return false;
    }
    return elem.getAttribute(message.attribute);
  } else if (message.type === "eval") {
    // TODO: chrome support
    debug && console.log("about to [eval]", message.script); // this will not show in Webkit console
    const result = window.eval(message.script); // eslint-disable-line no-eval
    return result;
  } else if (message.type === "hide") {
    debug && console.log("[hide]", message.selectors);
    return hideElementsUtil(message.selectors, message.method);
  } else if (message.type === "undohide") {
    const existingElement = getStyleElementUtil();
    debug && console.log("[unhide]", !!existingElement);
    if (existingElement) {
      existingElement.remove();
    }
    return !!existingElement
  } else if (message.type === "matches") {
    const matched = matches(message.config);
    debug && console.log("[matches?]", message.config.type, JSON.stringify(message.config), matched);
    return matched;
  } else if (message.type === "executeAction") {
    debug && console.log("[executeAction]", message);
    actionQueue = actionQueue.then(() => executeAction(message.config, message.param));
    return true;
  }
  return null;
}
