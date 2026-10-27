import generateCMPTests from '../playwright/runner';

generateCMPTests('valostore', [
    'https://www.valostore.se/',
    'https://www.valostore.no/',
    'https://www.valostore.fi/',
    'https://www.valostore.dk/',
    'https://www.valostore.de/',
    'https://www.valostore.com/',
]);
