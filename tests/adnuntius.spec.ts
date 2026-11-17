import generateCMPTests from '../playwright/runner';

generateCMPTests('adnuntius', [
    'https://forsvaretsforum.no/',
    'https://www.khrono.no/',
    'https://www.politiforum.no/',
    'https://www.barnehage.no/',
]);
