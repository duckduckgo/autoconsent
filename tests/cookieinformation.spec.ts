import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Cookie Information Banner',
    [
        // 'https://www.phaseone.com/', // appears only on user iteraction
        'https://www.georgjensen.com/',
        'https://www.power.no/',
        // Shopware stores with the native Shopware banner hidden
        'https://www.webapoteket.dk/',
        'https://www.lifeextensioneurope.nl/',
    ],
    {},
);
