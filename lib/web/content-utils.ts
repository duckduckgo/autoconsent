import { HideMethod } from "../messages";

// get or create a style container for CSS overrides
export function getStyleElementUtil(): HTMLStyleElement {
  const styleOverrideElementId = "autoconsent-css-rules";
  const styleSelector = `style#${styleOverrideElementId}`;
  const existingElement = document.querySelector(styleSelector);
  if (existingElement && existingElement instanceof HTMLStyleElement) {
    return existingElement;
  } else {
    const parent = document.head ||
      document.getElementsByTagName("head")[0] ||
      document.documentElement;
    const css = document.createElement("style");
    css.id = styleOverrideElementId;
    parent.appendChild(css);
    return css;
  }
}

// hide elements with a CSS rule
export function hideElementsUtil(selectors: string[], method: HideMethod): boolean {
  const hidingSnippet = method === 'display' ? `display: none` : `opacity: 0`;
  const rule = `${selectors.join(",")} { ${hidingSnippet} !important; z-index: -1 !important; pointer-events: none !important; } `;
  const styleEl = getStyleElementUtil();
  if (styleEl instanceof HTMLStyleElement) {
    styleEl.innerText += rule;
    return selectors.length > 0;
  }
  return false;
}
