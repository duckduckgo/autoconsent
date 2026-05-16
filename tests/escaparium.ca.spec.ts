import generateCMPTests from '../playwright/runner';

generateCMPTests('escaparium.ca', [
    'https://www.escaparium.ca/laval/book',
    'https://www.escaparium.ca/',
    'https://www.escaparium.ca/sherbrooke/book',
    'https://www.escaparium.ca/saguenay/book',
]);
