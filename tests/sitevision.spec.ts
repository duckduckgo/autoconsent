import generateCMPTests from '../playwright/runner';

generateCMPTests('sitevision', [
    'https://jordbruksverket.se/',
    'https://www.norrkoping.se/',
    'https://www.skara.se/',
    'https://www.varnamo.se/',
    'https://www.uppsalavatten.se/',
]);
