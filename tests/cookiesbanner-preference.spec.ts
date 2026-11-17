import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiesbanner-preference', [
    'https://www.caisseavsvaud.ch/',
    'https://www.aaeb.ch/',
    'https://www.steveguerdat.com/',
    'https://www.epackstart.ch/',
]);
