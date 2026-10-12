import generateCMPTests from '../playwright/runner';

generateCMPTests('bigid', [
    'https://www.muchloved.com/',
    'https://www.remitly.com/',
    'https://www.zs.com/',
    'https://www.dexus.com/', // no reject button on the first layer
]);
