import { matches, executeAction } from "./consentomatic/index";
import { ContentScriptMessage } from "../messages";

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
      results[i] = e.offsetParent !== null || window.getComputedStyle(e).display !== "none";
    });
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
    if (!elem) {
      return false;
    }
    return elem.getAttribute(message.attribute);
  } else if (message.type === "eval") {
    // TODO: chrome support
    const result = window.eval(message.script); // eslint-disable-line no-eval
    debug && console.log("[eval]", message.script, result);
    return result;
  } else if (message.type === "hide") {
    const parent =
      document.head ||
      document.getElementsByTagName("head")[0] ||
      document.documentElement;
    const hidden = message.selectors.filter(selector => {
      const matching = document.querySelectorAll(selector);
      return matching.length > 0;
    }, []);
    const rule = `${hidden.join(",")} { display: none !important; }`;
    const css = document.createElement("style");
    css.type = "text/css";
    css.id = "re-consent-css-rules";
    css.appendChild(document.createTextNode(rule));
    parent.appendChild(css);
    return hidden.length > 0;
  } else if (message.type === "matches") {
    const matched = matches(message.config);
    return matched;
  } else if (message.type === "executeAction") {
    actionQueue = actionQueue.then(() => executeAction(message.config, message.param));
    return true;
  }
  return null;
}
