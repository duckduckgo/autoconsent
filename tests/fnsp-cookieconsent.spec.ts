import generateCMPTests from '../playwright/runner';

generateCMPTests('fnsp-cookieconsent', [
    'https://www.helse-bergen.no/',
    'https://www.helse-vest.no/',
    'https://www.oslo-universitetssykehus.no/',
    'https://www.stolav.no/',
    'https://www.ahus.no/',
]);
