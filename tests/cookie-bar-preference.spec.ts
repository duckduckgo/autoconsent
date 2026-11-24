import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-bar-preference', [
    'https://evidia.de/',
    'https://averbis.com/',
    'https://pokolm.com/',
    'https://duesseldorf-neuss.igmetall.de/',
]);
