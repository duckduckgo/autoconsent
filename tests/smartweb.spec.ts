import generateCMPTests from '../playwright/runner';

generateCMPTests('smartweb', [
    'https://huntinglife.dk/',
    'https://billigcykel.dk/',
    'https://taon.dk/',
    'https://exentri.com/',
    'https://kraftblokk.no/',
]);
