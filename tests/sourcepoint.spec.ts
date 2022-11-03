import generateCMPTests from "../playwright/runner";

generateCMPTests('Sourcepoint-frame', [
    'https://www.theguardian.com/',
    'https://www.n-tv.de/',
    'https://news.sky.com/',
]);

generateCMPTests('Sourcepoint-frame', [
    'https://www.insider.com/',
    "https://www.brianmadden.com/",
    "https://www.csoonline.com/blogs",
    "https://www.independent.co.uk/",
], {
    skipRegions: ["US", "GB"],
});

generateCMPTests('Sourcepoint-frame', [
    "https://www.sueddeutsche.de/",
    "https://www.derstandard.at/",
    "https://www.heise.de/",
], {
    skipRegions: ["US", "GB", "FR"],
    expectPopupOpen: false,
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
})