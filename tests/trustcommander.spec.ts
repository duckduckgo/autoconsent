import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', [
    'https://eniplenitude.com/',
    'https://www.expert.it/',
    'https://www.kartell.com/',
    'https://www.alperia.eu/',
]);
