import generateCMPTests from "../playwright/runner";

generateCMPTests('TrustArc', [
    'https://www.garmin.com/de-DE/',
    'https://www.wish.com/',
    'https://www.forbes.com/',
    'https://www.starbucks.com/',
], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ["US"]
});
