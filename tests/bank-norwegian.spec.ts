import generateCMPTests from '../playwright/runner';

generateCMPTests('bank-norwegian', [
    'https://www.banknorwegian.se/',
    'https://www.banknorwegian.no/',
    'https://www.banknorwegian.fi/',
    'https://www.banknorwegian.dk/',
    'https://www.banknorwegian.de/',
]);
