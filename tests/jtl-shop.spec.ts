import generateCMPTests from '../playwright/runner';

generateCMPTests('jtl-shop', [
    'https://www.lotticards.de/',
    'https://www.4komma5.de/',
    'https://oel-engel.de/',
    'https://www.stowa.de/',
    'https://www.kartons24.de/',
]);
