import { AutoCMP, TabActor } from './types';

// hide rules not specific to a single CMP rule
const globalHidden = [
  "#didomi-popup,.didomi-popup-container,.didomi-popup-notice,.didomi-consent-popup-preferences,#didomi-notice,.didomi-popup-backdrop,.didomi-screen-medium",
]

export default async function prehideElements(tab: TabActor, rules: AutoCMP[]): Promise<void> {
    const selectors = rules.reduce((selectorList, rule) => {
        if (rule.prehideSelectors) {
          return [...selectorList, ...rule.prehideSelectors];
        }
        return selectorList;
      }, globalHidden);
    await tab.hideElements(selectors);
}
