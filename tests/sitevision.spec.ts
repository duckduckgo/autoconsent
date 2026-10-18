import generateCMPTests from '../playwright/runner';

generateCMPTests('sitevision', [
    'https://www.lansstyrelsen.se/',
    'https://www.norrkoping.se/',
    'https://www.skara.se/',
    'https://www.varnamo.se/',
    'https://www.uppsalavatten.se/',
]);
