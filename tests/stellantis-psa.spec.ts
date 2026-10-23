import generateCMPTests from '../playwright/runner';

generateCMPTests('stellantis-psa', [
    'https://www.citroen.it/',
    'https://www.peugeot.fr/',
    'https://www.fiat.it/',
    'https://www.opel.de/',
    'https://www.citroen.co.uk/',
]);
