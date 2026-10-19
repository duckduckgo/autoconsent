import generateCMPTests from '../playwright/runner';

generateCMPTests('fixpart', [
    'https://www.fixpart.dk/',
    'https://www.fixpart.nl/',
    'https://www.fixpart.de/',
    'https://www.fixpart.co.uk/',
]);
