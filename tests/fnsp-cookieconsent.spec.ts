import generateCMPTests from '../playwright/runner';

generateCMPTests('fnsp-cookieconsent', [
    'https://www.oslo-universitetssykehus.no/',
    'https://www.ahus.no/',
    'https://www.helse-bergen.no/',
    'https://www.stolav.no/',
]);
