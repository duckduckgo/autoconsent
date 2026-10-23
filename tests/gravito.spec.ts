import generateCMPTests from '../playwright/runner';

generateCMPTests('gravito', [
    'https://www.gp.se/',
    'https://www.hitta.se/',
    'https://www.suomi24.fi/',
    'https://www.foreca.fi/',
    'https://www.veikkaus.fi/',
]);
