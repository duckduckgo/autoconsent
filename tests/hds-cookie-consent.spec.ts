import generateCMPTests from '../playwright/runner';

generateCMPTests('hds-cookie-consent', [
    'https://www.hel.fi/',
    'https://kaupunginarkisto.hel.fi/',
    'https://healthincubatorhelsinki.com/',
    'https://www.spouseprogram.fi/',
]);
