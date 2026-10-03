import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda-v2', [
    'https://www.tabletmag.com/',
    'https://www.laperla.com/',
    'https://www.sanco-spa.com/',
    'https://www.fondazionemilano.eu/',
]);
