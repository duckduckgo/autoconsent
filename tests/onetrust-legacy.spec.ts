import generateCMPTests from '../playwright/runner';

generateCMPTests('onetrust-legacy', [
    'https://www.thenude.com/',
    'https://www.allianzdirect.it/',
    'https://www.allianzdirect.de/',
    'https://www.allianzdirect.nl/',
    'https://www.allianzdirect.es/',
]);
