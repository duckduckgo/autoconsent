import generateCMPTests from "../playwright/runner";

generateCMPTests('consentmanager.net',
    [
        // 'https://sourceforge.net/', // disabled because of a botwall
        'https://www.dastelefonbuch.de/',
        'https://www.history.de/',
    ]
, {
    skipRegions: ["US", "GB"]
});
