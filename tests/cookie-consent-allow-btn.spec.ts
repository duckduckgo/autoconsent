import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-consent-allow-btn', [
    'https://gamemasha.com/',
    'https://paintbyclick.com/',
    'https://metakidsplay.com/',
    'https://lukogames.com/',
]);
