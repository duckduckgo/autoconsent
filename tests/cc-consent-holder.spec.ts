import generateCMPTests from '../playwright/runner';

generateCMPTests('cc-consent-holder', [
    'https://www.skapamer.se/',
    'https://www.hemfint.se/',
    'https://www.skapemer.no/',
    'https://www.ellahobby.de/',
    'https://freddyhaus.de/',
]);
