import generateCMPTests from '../playwright/runner';

generateCMPTests('hurra-consent', [
    'https://www.bonprix.pl/',
    'https://www.bonprix.se/',
    'https://www.bonprix.nl/',
    'https://www.bonprix.de/',
]);
