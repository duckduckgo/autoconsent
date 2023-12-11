import { BuilderSelectedElementMessage } from "../../../lib/messages";

declare global {
  function unhighlightAll(): void;
  function enableSelectMode(): void;
  function disableSelectMode(): void;
  function checkSelector(selector: string): number;
}

function initBuilderHelpers() {
  if (globalThis.enableSelectMode) {
    console.log('autoconsent builder helpers already loaded');
    return;
  }

  const highlightedNodes = new Set<HTMLElement>();

  function highlightNode(node: HTMLElement) {
    if (!node.style) return;
    if (node.hasAttribute('style')) {
      // @ts-expect-error __oldStyles is needed to restore the original styles
      node.__oldStyles = node.style.cssText;
    }
    node.style.animation = 'pulsate .5s infinite';
    node.style.outline = 'solid firebrick';

    const styleTag = document.createElement('style');
    styleTag.id = 'autoconsent-builder-styles';
    styleTag.textContent = `
      @keyframes pulsate {
        0% {
          outline-width: 8px;
          outline-offset: -4px;
        }
        50% {
          outline-width: 4px;
          outline-offset: -2px;
        }
        100% {
          outline-width: 8px;
          outline-offset: -4px;
        }
      }
    `;
    document.head.appendChild(styleTag);
    highlightedNodes.add(node);
  }

  function unhighlightNode(node: HTMLElement) {
    if (!node.style || !node.hasAttribute('style')) return;
    if (!highlightedNodes.has(node)) return;
    if ('__oldStyles' in node) {
      // @ts-expect-error __oldStyles is set in highlightNode
      node.style.cssText = node.__oldStyles;
      delete node.__oldStyles;
    } else {
      node.removeAttribute('style');
    }
  }

  globalThis.unhighlightAll = function () {
    highlightedNodes.forEach((node) => {
      unhighlightNode(node);
    });
    highlightedNodes.clear();
  }

  function selectModeClickHandler(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const topNode = document.elementFromPoint(e.clientX, e.clientY);
    const nodes = [];
    let node = topNode;
    while (node) {
      nodes.push(node);
      node = node.parentElement;
    }
    const nodesData = nodes.map((node: HTMLElement) => {
      return {
        tag: node.tagName.toLowerCase(),
        id: node.id,
        classes: Array.from(node.classList),
        attributes: Array.from(node.attributes).reduce((acc, attr) => {
          if (['class', 'id'].includes(attr.name)) return acc;
          let value = attr.value;
          if (attr.name === 'style' && highlightedNodes.has(node)) {
            // @ts-expect-error __oldStyles is set in highlightNode
            if (!'__oldStyles' in node) {
              // there was no style before highlighting
              return acc;
            }
            // @ts-expect-error __oldStyles is set in highlightNode
            value = node.__oldStyles;
          }
          return {...acc, [attr.name]: value}
        }, {}),
        extras: {
          // @ts-expect-error this is only used for input elements
          isChecked: node.checked,
          // @ts-expect-error this is only used for input elements
          isDisabled: node.disabled,
        }
      };
    });
    console.log('selected node', nodesData);
    disableSelectMode();
    chrome.runtime.sendMessage({
      type: 'builderSelectedElement',
      nodes: nodesData
    } as BuilderSelectedElementMessage);
  }

  function selectModeMouseEnter(e: MouseEvent) {
    highlightNode(e.target as HTMLElement);
  }

  function selectModeMouseLeave(e: MouseEvent) {
    unhighlightNode(e.target as HTMLElement);
    highlightedNodes.delete(e.target as HTMLElement);
  }

  globalThis.enableSelectMode = function () {
    // register a global click event to get the nodes under the cursor
    console.log('enabling select mode');
    unhighlightAll();
    document.addEventListener('click', selectModeClickHandler, { once: true, capture: true });
    document.addEventListener('mouseenter', selectModeMouseEnter, { capture: true });
    document.addEventListener('mouseleave', selectModeMouseLeave, { capture: true });
  }

  globalThis.disableSelectMode = function () {
    console.log('disabling select mode');
    document.removeEventListener('click', selectModeClickHandler);
    document.removeEventListener('mouseenter', selectModeMouseEnter, { capture: true });
    document.removeEventListener('mouseleave', selectModeMouseLeave, { capture: true });
    unhighlightAll();
  }

  globalThis.checkSelector = function (selector: string) {
    unhighlightAll();
    if (!selector.trim()) return 0;
    const nodes = document.querySelectorAll(selector);
    console.log('highlighting selector', selector, nodes);
    nodes.forEach((node: HTMLElement) => {
      highlightNode(node);
    });
    return nodes.length;
  }

  console.log('autoconsent builder helpers loaded');
}

initBuilderHelpers();
