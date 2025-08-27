// FIXME: the detection patterns are defined both in the crawl postprocessing codebase and here. We should consolidate them in one place.
// TODO: check for false positive detections per pattern
export const DETECT_PATTERNS = [
    /accept cookies/gi,
    /accept all/gi,
    /reject all/gi,
    /only necessary cookies/gi, // "only necessary" is probably too broad
    /by clicking.*(accept|agree|allow)/gi,
    /by continuing/gi,
    /we (use|serve)( optional)? cookies/gi,
    /we are using cookies/gi,
    /use of cookies/gi,
    /(this|our) (web)?site.*cookies/gi,
    /cookies (and|or) .* technologies/gi,
    /such as cookies/gi,
    /read more about.*cookies/gi,
    /consent to.*cookies/gi,
    /we and our partners.*cookies/gi,
    /we.*store.*information.*such as.*cookies/gi,
    /store and\/or access information.*on a device/gi,
    /personalised ads and content, ad and content measurement/gi,

    // it might be tempting to add the patterns below, but they cause too many false positives. Don't do it :)
    // /cookies? settings/i,
    // /cookies? preferences/i,

    // FR
    /utilisons.*des.*cookies/gi,
    /nous.*utilisons.*des/gi,
    /des.*cookies.*pour/gi,
    /des.*informations.*sur/gi,
    /retirer.*votre.*consentement/gi,
    /accéder.*à.*des/gi,
    /à.*des.*informations/gi,
    /et.*nos.*partenaires/gi,
    /publicités.*et.*du.*contenu/gi,
    /utilise.*des.*cookies/gi,
    /utilisent.*des.*cookies/gi,
    /stocker.*et.*ou.*accéder/gi,
    /consentement.*à.*tout.*moment/gi,
    /votre.*consentement/gi,
    /accepter.*tout/gi,
    /utilisation.*des.*cookies/gi,
    /cookies.*ou.*technologies/gi,
    /acceptez.*l.*utilisation/gi,
    /continuer sans accepter/gi,
    /tout refuser/gi,
    /(refuser|rejeter) tous les cookies/gi,
    /je refuse/gi,
    /refuser et continuer/gi,
    /refuser les cookies/gi,
    /seulement nécessaires/gi,
    /je désactive les finalités non essentielles/gi,
    /cookies essentiels uniquement/gi,
    /nécessaires uniquement/gi,

    // DE
    /wir.*verwenden.*cookies/gi,
    /wir.*und.*unsere.*partner/gi,
    /zugriff.*auf.*informationen.*auf/gi,
    /inhalte.*messung.*von.*werbeleistung.*und/gi,
    /cookies.*und.*andere/gi,
    /verwendung.*von.*cookies/gi,
    /wir.*nutzen.*cookies/gi,
    /verwendet.*cookies/gi,
    /sie.*können.*ihre.*auswahl/gi,
    /und.*ähnliche.*technologien/gi,
    /cookies.*wir.*verwenden/gi,

    /alles?.*ablehnen/gi,
    /(nur|nicht).*(zusätzliche|essenzielle|funktionale|notwendige|erforderliche).*(cookies|akzeptieren|erlauben|ablehnen)/gi,
    /weiter.*(ohne|mit).*(einwilligung|zustimmung|cookies)/gi,
    /(cookies|einwilligung).*ablehnen/gi,
    /nur funktionale cookies akzeptieren/gi,
    /optionale ablehnen/gi,
    /zustimmung verweigern/gi,

    // NL
    /gebruik.*van.*cookies/gi,
    /(we|wij).*gebruiken.*cookies.*om/gi,
    /cookies.*en.*vergelijkbare/gi,

    /(alles|cookies).*(afwijzen|weigeren|verwerpen)/gi,
    /alleen.*noodzakelijke?/gi,
    /cookies weigeren/gi,
    /weiger.*(cookies|alles)/gi,
    /doorgaan zonder (te accepteren|akkoord te gaan)/gi,
    /alleen.*(optionele|functionele|functioneel|noodzakelijke|essentiële).*cookies/gi,
    /wijs alles af/gi,
];

export function checkHeuristicPatterns() {
    const allText = document.documentElement?.innerText;
    const patterns = [];
    const snippets = [];
    for (const p of DETECT_PATTERNS) {
        const matches = allText?.match(p);
        if (matches) {
            patterns.push(p.toString());
            snippets.push(...matches.map((m) => m.substring(0, 200)));
        }
    }
    return { patterns, snippets };
}
