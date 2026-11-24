import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-notice-container',
    [
        'https://mobile.comprasparaguai.com.br/',
        'https://www.srcmotos.com.br/',
        'https://www.avantmotos.com.br/',
        'https://www.goldmaqempilhadeiras.com.br/',
    ],
    {},
);
