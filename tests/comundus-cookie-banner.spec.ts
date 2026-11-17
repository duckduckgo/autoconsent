import generateCMPTests from '../playwright/runner';

generateCMPTests('comundus-cookie-banner', [
    'https://www.vbl.de/',
    'https://drv.vblportal.de/',
    'https://www.familienservice.de/',
    'https://www.global-education.de/',
    'https://www.pme-law.de/',
]);
