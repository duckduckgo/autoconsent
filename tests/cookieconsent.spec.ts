import generateCMPTests from "../playwright/runner";

generateCMPTests('cookieconsent', [
    'https://yrc.com/',
    'https://www.worldometers.info/',
    'https://www.expatica.com/de',
    'https://stetson.com/',
], {
    skipRegions: ['GB']
});
