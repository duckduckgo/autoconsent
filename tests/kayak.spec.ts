import generateCMPTests from '../playwright/runner';

generateCMPTests('kayak', [
    'https://www.kayak.com/',
    'https://www.kayak.co.uk/',
    'https://www.kayak.de/',
    'https://www.kayak.fr/',
    'https://www.kayak.es/',
    'https://www.kayak.it/',
    'https://www.kayak.nl/',
    'https://www.kayak.pl/',
]);
