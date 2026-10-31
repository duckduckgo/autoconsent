import generateCMPTests from '../playwright/runner';

generateCMPTests('sachsen-cookiebar', [
    'https://www.justiz.sachsen.de/',
    'https://www.hsbvl.sachsen.de/',
    'https://www.lz-sehen-chemnitz.sachsen.de/',
]);
