import generateCMPTests from "./runner";

generateCMPTests('quantcast', [
    'https://www.cyclingnews.com/',
    'https://www.techradar.com/',
], {
    skipRegions: ["US", "GB", "FR"]
});

generateCMPTests('com_quantcast2', [
    'https://www.fandom.com/',
], {
    testOptOut: false,
    testSelfTest: false,
    skipRegions: ["US"]
});
