import generateCMPTests from "../playwright/runner";

generateCMPTests('consentmanager.net',
    [
        'https://sourceforge.net/',
        // 'https://www.dastelefonbuch.de/', // disabled due to Playwright bug in WebKit: https://github.com/microsoft/playwright/issues/14745
        'https://www.history.de/',
    ]
, {
    skipRegions: ["US", "GB"]
});
