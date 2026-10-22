import generateCMPTests from '../playwright/runner';

generateCMPTests('fanatics', [
    'https://www.fanatics.co.uk/en/',
    'https://www.fanatics.de/de/',
    'https://www.fanatics.fr/fr/',
    'https://www.fanatics.es/es/',
    'https://www.fanatics.it/it/',
]);
