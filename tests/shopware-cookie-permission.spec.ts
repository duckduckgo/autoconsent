import generateCMPTests from '../playwright/runner';

generateCMPTests('shopware-cookie-permission', [
    'https://www.trauttmansdorff.it/',
    'https://www.edingershops.de/',
    'https://www.lekoni.de/',
    'https://www.braun.ch/',
    // decline button hidden by the theme, opt-out goes through the cookie configuration offcanvas
    'https://www.conalco.de/',
]);
