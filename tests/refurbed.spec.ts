import generateCMPTests from '../playwright/runner';

generateCMPTests('refurbed', [
    'https://www.refurbed.se/',
    'https://www.refurbed.de/',
    'https://www.refurbed.co.uk/',
    'https://www.refurbed.com/',
    'https://www.refurbed.dk/',
    'https://www.refurbed.fr/',
]);
