import generateCMPTests from "./runner";

generateCMPTests('consentmanager.net',
    [
        'https://sourceforge.net/',
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
    ]
, {
    skipRegions: ["US", "GB"]
});
