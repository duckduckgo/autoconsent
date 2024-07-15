import { FiltersEngine } from '@cliqz/adblocker';
import { extractFeaturesFromDOM } from '@cliqz/adblocker-content';
import { parse as tldtsParse } from 'tldts-experimental';

export function parseFilterList(rawFilterlist: string) {
  const engine = FiltersEngine.parse(rawFilterlist, {
    enableMutationObserver: false, // we don't monitor DOM changes at the moment
    loadNetworkFilters: false,
    enableHtmlFiltering: false,
    loadCSPFilters: false,
  });
  return engine;
}

export function getFilterlistSelectors(engine: FiltersEngine): string {
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
    getInjectionRules: true,
    getExtendedRules: true,
    getRulesFromDOM: true,
    getRulesFromHostname: true,
  });

  if (cosmetics.styles) {
    const selectorsOnly = cosmetics.styles.replace(/\s*{ display: none !important; }\s*/g, ',').replace(/,$/, '');
    return selectorsOnly;
  }

  return '';
}
