import generateCMPTests from '../playwright/runner';

generateCMPTests('sitevision', [
    'https://www.migrationsverket.se/',
    'https://malmo.se/',
    'https://www.skolverket.se/',
    'https://www.umea.se/',
    'https://www.lansstyrelsen.se/',
]);
