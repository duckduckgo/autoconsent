import generateCMPTests from "../playwright/runner";

generateCMPTests('com_didomi.io', [
    'https://www.ghacks.net/'
], {
    testOptOut: false,
    testSelfTest: false,
    skipRegions: ["US"],
});
