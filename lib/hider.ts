import { AutoCMP, TabActor } from './types';

export default async function prehideElements(tab: TabActor, rules: AutoCMP[]): Promise<void> {
    const selectors = rules.reduce((selectorList, rule) => {
        if (rule.prehideSelectors) {
          return [...selectorList, ...rule.prehideSelectors];
        }
        return selectorList;
      }, []);
    await tab.hideElements(selectors);
}
