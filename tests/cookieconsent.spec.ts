import generateCMPTests from "./runner";

generateCMPTests('cookieconsent', [
    'https://yrc.com/',
    'https://www.worldometers.info/'
], {
    skipRegions: ['GB']
});
