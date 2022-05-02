import generateCMPTests from "./runner";

generateCMPTests('cookie-law-info', [
    'https://www.yubico.com/',
    'https://www.drohnen.de/'
], {
    skipRegions: ['US', 'GB']
});
