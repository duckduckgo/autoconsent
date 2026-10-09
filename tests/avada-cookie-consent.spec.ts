import generateCMPTests from '../playwright/runner';

generateCMPTests('avada-cookie-consent', [
    'https://www.nativeunion.com/products/belt-cable-usb-c-to-usb-c',
    'https://www.marinbikes.com/',
    'https://www.simplemodern.com/',
    // Deny button opens the preferences popup
    'https://www.outdoortechnology.com/',
]);
