import generateCMPTests from '../playwright/runner';

generateCMPTests('chefcookie', [
    'https://www.unibo.it/',
    'https://www.unife.it/',
    'https://www.ehiweb.it/',
    'https://www.purizon-petfood.de/',
    'https://www.close2.de/',
]);
