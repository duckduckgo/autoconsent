import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-law-popup', [
    'https://elearning.unimib.it/',
    'https://top-akademie.com/',
    'https://e-tesda.gov.ph/',
    'https://www.trueplookpanya.com/',
]);
