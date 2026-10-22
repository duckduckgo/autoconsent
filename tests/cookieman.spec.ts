import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieman', [
    'https://www.arera.it/',
    'https://www.usb.it/',
    'https://www.dosb.de/',
    'https://www.hs-niederrhein.de/',
    'https://www.foodwatch.org/',
    'https://www.wu.ac.at/',
    'https://www.warta.pl/',
]);
