import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-law-info-legacy', [
    'https://brunaboinne.admit-one.eu/',
    'https://www.getrix.it/',
    'https://www.fontanot.it/',
    'https://www.tripnet.pl/',
]);
