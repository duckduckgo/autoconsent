import generateCMPTests from "./runner";

generateCMPTests('cookie-law-info', [
    'https://www.yubico.com/',
    'https://nytcrosswordanswers.org/',
    'https://www.drohnen.de/'
], {
    skipRegions: ['US', 'GB']
});
