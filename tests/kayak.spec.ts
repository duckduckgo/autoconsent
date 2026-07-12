import generateCMPTests from '../playwright/runner';

generateCMPTests('kayak', [
    'https://www.kayak.es/',
    'https://www.kayak.co.uk/',
    'https://www.kayak.fr/',
    'https://www.kayak.it/',
    'https://www.kayak.nl/',
    'https://www.momondo.es/',
]);
