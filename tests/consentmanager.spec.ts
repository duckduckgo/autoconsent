import generateCMPTests from "./runner";

generateCMPTests('consentmanager.net',
    [
        'https://sourceforge.net/',
        'https://www.dastelefonbuch.de/'
    ]
, {
    skipRegions: ["US", "GB"]
});
