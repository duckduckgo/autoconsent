import { HideMethod } from "./rules";
import { Config } from "./types";

// get or create a style container for CSS overrides
export function getStyleElement(styleOverrideElementId = "autoconsent-css-rules"): HTMLStyleElement {
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
export function hideElements(
  styleEl: HTMLStyleElement,
  selector: string,
  method: HideMethod = 'display',
): boolean {
  const hidingSnippet = method === "opacity" ? `opacity: 0` : `display: none`; // use display by default
  const rule = `${selector} { ${hidingSnippet} !important; z-index: -1 !important; pointer-events: none !important; } `;

  if (styleEl instanceof HTMLStyleElement) {
    styleEl.innerText += rule;
    return selector.length > 0;
  }
  return false;
}

export async function waitFor(predicate: () => Promise<boolean> | boolean, maxTimes: number, interval: number): Promise<boolean> {
  const result = await predicate();
  if (!result && maxTimes > 0) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve(waitFor(predicate, maxTimes - 1, interval));
      }, interval);
    });
  }
  return Promise.resolve(result);
}

export function isElementVisible(elem: HTMLElement): boolean {
  if (!elem) {
    return false;
  }
  if (elem.offsetParent !== null) {
    return true;
  } else {
    const css = window.getComputedStyle(elem);
    if (css.position === 'fixed' && css.display !== "none") { // fixed elements may be visible even if the parent is not
      return true;
    }
  }
  return false;
}

export function copyObject(data: any) {
  if (globalThis.structuredClone) {
    return structuredClone(data);
  }
  return JSON.parse(JSON.stringify(data));
}

export function normalizeConfig(providedConfig: any): Config {
  const defaultConfig: Config = {
    enabled: true,
    autoAction: 'optOut', // if falsy, the extension will wait for an explicit user signal before opting in/out
    disabledCmps: [],
    enablePrehide: true,
    enableCosmeticRules: true,
    detectRetries: 20,
    isMainWorld: false,
    prehideTimeout: 2000,
    logs: {
      lifecycle: false,
      rulesteps: false,
      evals: false,
      errors: true,
      messages: false,
    },
  };
  const updatedConfig: Config = copyObject(defaultConfig);
  // filter out any unknown entries
  for (const key of Object.keys(defaultConfig)) {
    if (typeof providedConfig[key] !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error - TS doesn't know that we've checked for undefined
      updatedConfig[key] = providedConfig[key];
    }
  }
  return updatedConfig;
}
