import generateCMPTests from '../playwright/runner';

generateCMPTests('wuerth', [
    'https://www.wuerth.no/',
    'https://www.wurth.gr/',
    'https://www.wuerth.ro/',
    'https://www.wuerth-industrie.com/',
]);
