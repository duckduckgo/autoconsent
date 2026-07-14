import generateCMPTests from '../playwright/runner';

generateCMPTests('podimo', [
    'https://podimo.com/',
    'https://podimo.com/en',
    'https://podimo.com/dk',
    'https://podimo.com/de-de',
    'https://podimo.com/es',
]);
