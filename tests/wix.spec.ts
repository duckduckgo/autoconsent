import generateCMPTests from '../playwright/runner';

generateCMPTests('wix', [
    'https://www.wix.com/',
    // "uou" visitor banner with a "Cookie Settings" flow
    'https://www.sandbergantiques.com/',
    'https://www.mech-mate.co.uk/',
    // same banner with a direct "Decline All" button
    'https://www.dhi-scotland.com/',
]);
