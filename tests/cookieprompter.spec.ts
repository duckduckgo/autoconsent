import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieprompter', [
    'https://virk.dk/',
    'https://erhvervsstyrelsen.dk/',
    'https://eufonde.dk/',
    'https://nemhandel.dk/',
    'https://www.glasmagerne.dk/',
]);
