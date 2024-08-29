import { FiltersEngine } from '@cliqz/adblocker';
import { extractFeaturesFromDOM } from '@cliqz/adblocker-content';
import { parse as tldtsParse } from 'tldts-experimental';
import { getHidingStyle } from './utils';

export function deserializeFilterList(serializedEngine: Uint8Array) {
  return FiltersEngine.deserialize(serializedEngine)
}

export function parseFilterList(rawFilterlist: string) {
  performance.mark('autoconsent-parse-start');
  const engine = FiltersEngine.parse(rawFilterlist, {
    enableMutationObserver: false, // we don't monitor DOM changes at the moment
    loadNetworkFilters: false,
    enableHtmlFiltering: false,
    loadCSPFilters: false,
  });
  performance.mark('autoconsent-parse-end');
  return engine;
}

export function getCosmeticStylesheet(engine: FiltersEngine): string {
  try {
    const parsed = tldtsParse(location.href);
    const hostname = parsed.hostname || '';
    const domain = parsed.domain || '';

    const cosmetics = engine.getCosmeticsFilters({
      url: location.href,
      hostname,
      domain,

      // this extracts current ids, classes and attributes (depends on the current DOM state)
      ...extractFeaturesFromDOM([document.documentElement]),

      getBaseRules: true,
      getInjectionRules: false, // we don't inject scripts atm
      getExtendedRules: true,
      getRulesFromDOM: true,
      getRulesFromHostname: true,

      hidingStyle: getHidingStyle('opacity'),
    });
    return cosmetics.styles;
  } catch (e) {
    console.error('Error getting cosmetic rules', e);
    return '';
  }
}

export function getFilterlistSelectors(styles: string): string {
  if (styles) {
    const selectorsOnly = styles.replace(/\s*{[^\\}]*}\s*/g, ',').replace(/,$/, '');
    return selectorsOnly;
  }
  return '';
}
