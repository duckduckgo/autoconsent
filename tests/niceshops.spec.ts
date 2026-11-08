import generateCMPTests from '../playwright/runner';

generateCMPTests('niceshops', [
    'https://www.3djake.se/',
    'https://www.ecco-verde.com/',
    'https://www.vitalabo.ch/',
    'https://www.3djake.uk/',
]);
