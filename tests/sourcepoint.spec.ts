import generateCMPTests from "../playwright/runner";

generateCMPTests('Sourcepoint-frame', [
    'https://www.theguardian.com/',
    'https://www.n-tv.de/', // broken?
    'https://www.sueddeutsche.de/', // broken?
    'https://news.sky.com/'
], {
    testSelfTest: false,
});

generateCMPTests('Sourcepoint-frame', [
    'https://www.insider.com/',
], {
    skipRegions: ["US", "GB"],
    testSelfTest: false,
});
