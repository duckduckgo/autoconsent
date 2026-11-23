import generateCMPTests from '../playwright/runner';

generateCMPTests('pvh', [
    'https://www.calvinklein.co.uk/',
    'https://uk.tommy.com/',
    'https://www.calvinklein.de/',
    'https://nl.tommy.com/',
]);
