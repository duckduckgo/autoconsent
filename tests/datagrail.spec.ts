import generateCMPTests from '../playwright/runner';

generateCMPTests('datagrail', [
    'https://konghq.com/',
    // 'https://www.topps.com/', // cloudflare botwall
]);
