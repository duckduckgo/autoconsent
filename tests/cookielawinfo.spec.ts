import generateCMPTests from "./runner";

generateCMPTests('cookie-law-info', [
    'https://www.yubico.com/',
    'https://nytcrosswordanswers.org/',
], {
    skipRegions: ['US', 'GB']
});
