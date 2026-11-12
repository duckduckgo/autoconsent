import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-popup-cookieno', [
    'https://baumarkt-xxl.de/',
    'https://www.barudan.de/',
    'https://sw-bauwelt.de/',
    'https://texdesign.de/',
]);
