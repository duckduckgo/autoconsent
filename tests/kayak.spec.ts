import generateCMPTests from '../playwright/runner';

generateCMPTests('kayak', [
    'https://www.kayak.pl/',
    'https://www.kayak.de/',
    'https://www.kayak.fr/',
    'https://www.kayak.es/',
    'https://www.kayak.it/',
    'https://www.kayak.co.uk/',
]);
