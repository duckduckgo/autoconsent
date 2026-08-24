import generateCMPTests from '../playwright/runner';

generateCMPTests('ellera-cookie-consent', [
    'https://www.maurten.com/products/gel-100-caf-100-box-us',
    'https://www.telephonics.com/',
    'https://www.dzb-bank.de/',
    'https://www.charliehouse.org.uk/',
    // custom template without #elc-save-link
    'https://www.marcelwanders.com/',
    // custom template with an explicit decline button
    'https://www.koma-modular.cz/',
]);
