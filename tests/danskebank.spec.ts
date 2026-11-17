import generateCMPTests from '../playwright/runner';

generateCMPTests('danskebank', [
    'https://danskebank.com/',
    'https://danskebank.dk/',
    'https://danskebank.se/',
    'https://danskebank.no/',
    'https://danskebank.fi/',
    'https://danskeci.com/',
    'https://danica.dk/',
    'https://danskebank.co.uk/',
]);
