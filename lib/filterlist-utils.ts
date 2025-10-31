import { FiltersEngine } from '@ghostery/adblocker';
import { extractFeaturesFromDOM } from '@ghostery/adblocker-content';
import { parse as tldtsParse } from 'tldts-experimental';
import { getHidingStyle } from './utils';

export function deserializeFilterList(serializedEngine: Uint8Array) {
    return FiltersEngine.deserialize(serializedEngine);
}

// New interface for matched cosmetic filters with extended control
export interface CosmeticFilterMatch {
    styles: string;
    scripts: string[];
    extended: boolean;
}

// Separate matching from injection - this gives extended control
export function matchCosmeticFilters(engine: FiltersEngine): CosmeticFilterMatch | null {
    try {
        const parsed = tldtsParse(location.href);
        const hostname = parsed.hostname || '';
        const domain = parsed.domain || '';

        const cosmetics: any = engine.getCosmeticsFilters({
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

        return {
            styles: cosmetics.styles || '',
            scripts: cosmetics.scripts || [],
            extended: !!cosmetics.extended
        };
    } catch (e) {
        console.error('Error matching cosmetic filters', e);
        return null;
    }
}

// Injection function that allows extended control over what gets injected
export function injectCosmeticFilters(matchResult: CosmeticFilterMatch | null): string {
    if (!matchResult || !matchResult.styles) {
        return '';
    }
    
    // Here users can implement custom logic to control which filters to inject
    // For example, they could filter the styles based on their own criteria
    // This is where extended control is provided - users can modify the result before injection
    return matchResult.styles;
}

// Legacy function maintained for backward compatibility, uses the new separated approach
export function getCosmeticStylesheet(engine: FiltersEngine): string {
    const matchResult = matchCosmeticFilters(engine);
    return injectCosmeticFilters(matchResult);
}

export function getFilterlistSelectors(styles: string): string {
    if (styles) {
        const selectorsOnly = styles.replace(/\s*{[^\\}]*}\s*/g, ',').replace(/,$/, '');
        return selectorsOnly;
    }
    return '';
}
