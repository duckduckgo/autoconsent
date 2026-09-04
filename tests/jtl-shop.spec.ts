import generateCMPTests from '../playwright/runner';

generateCMPTests('jtl-shop', [
    'https://lotticards.de/',
    'https://www.kartons24.de/',
    'https://oel-engel.de/',
    'https://www.sport-greifenberg.de/',
]);
