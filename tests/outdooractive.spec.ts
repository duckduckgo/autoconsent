import generateCMPTests from '../playwright/runner';

generateCMPTests('outdooractive', [
    'https://www.outdooractive.com/',
    'https://www.alpenvereinaktiv.com/',
    'https://www.altenberg.de/',
    'https://www.tourenportal.at/',
    'https://www.touren.saarland/',
]);
