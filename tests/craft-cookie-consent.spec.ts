import generateCMPTests from '../playwright/runner';

generateCMPTests('craft-cookie-consent', [
    'https://www.maurten.com/products/gel-100-caf-100-box-us',
    'https://www.eberswalde.de/',
    'https://www.telephonics.com/',
    'https://www.iftf.org/',
    'https://www.marcelwanders.com/',
]);
