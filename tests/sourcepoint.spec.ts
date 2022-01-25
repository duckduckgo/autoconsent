import generateCMPTests from "./runner";

generateCMPTests('Sourcepoint', [
    'https://www.theguardian.com/',
    'https://www.n-tv.de/',
    'https://www.sueddeutsche.de/',
    'https://news.sky.com/'
]);

generateCMPTests('Sourcepoint', [
    'https://www.insider.com/',
], {
    skipRegions: ["US", "GB"]
});
