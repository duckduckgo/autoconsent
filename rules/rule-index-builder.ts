import { dynamicCMPs } from '../lib/cmps/all';
import { AutoConsentCMPRule } from '../lib/rules';
import AutoConsent from '../lib/web';

export type RuleIndexSection = 'generated' | 'generic' | 'code' | 'consentomatic';

// Lightweight popup manifest entry. This is only for listing/toggling rules;
// execution still uses rules.json, compact-rules.json, code CMPs, and Consent-O-Matic bundles.
export type RuleIndexEntry = {
    // Matches AutoCMP.name at runtime, so toggles can reuse Config.disabledCmps.
    name: string;
    // Popup-only grouping; runtime rule loading still uses the existing rule bundles.
    section: RuleIndexSection;
    // Included for site-specific search/tooltip context without loading full rules.json.
    urlPattern?: string;
    // Lets the popup flag cosmetic rules while keeping the index small.
    cosmetic?: boolean;
};

type DynamicCMPMetadata = {
    name: string;
};

function buildCodeBasedRuleMetadata(): DynamicCMPMetadata[] {
    const autoconsent = null as unknown as AutoConsent;
    return dynamicCMPs.map((Cmp) => ({
        name: new Cmp(autoconsent).name,
    }));
}

export function buildRuleIndex(rules: AutoConsentCMPRule[]): RuleIndexEntry[] {
    const codeBasedRules: RuleIndexEntry[] = buildCodeBasedRuleMetadata().map((rule) => ({
        name: rule.name,
        section: 'code',
    }));

    return [
        ...codeBasedRules,
        ...rules.map((rule) => {
            const entry: RuleIndexEntry = {
                name: rule.name,
                section: rule.name.startsWith('auto_') ? 'generated' : 'generic',
            };
            if (rule.runContext?.urlPattern) {
                entry.urlPattern = rule.runContext.urlPattern;
            }
            if (rule.cosmetic !== undefined) {
                entry.cosmetic = rule.cosmetic;
            }
            return entry;
        }),
    ].sort((a, b) => {
        if (a.section !== b.section) {
            return a.section.localeCompare(b.section);
        }
        return a.name.localeCompare(b.name);
    });
}
