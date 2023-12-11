import { ActiveSelectorBlocksItem, SelectedElementData } from "./types";

/**
 * very simple escape function. Do not use for any real world use cases.
 */
export function unsafeEscapeSelector(selector: string) {
  return selector.replace(/"/g, '\\"');
}

/**
 * guess the optimal selector blocks for the given nodeData
 */
export function defaultSelectorBlocks(nodeData: ActiveSelectorBlocksItem | SelectedElementData) {
  const result = structuredClone(nodeData);
  if (result.id) {
    // if we have an id, we probably don't need anything else
    result.attributes = {};
    result.classes = [];
    delete result.tag;
  } else if (result.classes.length) {
    // try classes next
    // TODO
    result.attributes = {};
    delete result.tag;
  }
  return result;
}

export function initialSelectorBlocks(nodeData: SelectedElementData[]) {
  const result = nodeData.map(
    defaultSelectorBlocks
  ).map(
    (item, idx) => Object.assign(item, { isUsed: idx === 0 })
  ) as ActiveSelectorBlocksItem[];
  return result;
}