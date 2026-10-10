import generateCMPTests from '../playwright/runner';

generateCMPTests('up-cookie-consent', [
    'https://haddingtonhouse.ie/',
    'https://www.thehari.com/',
    'https://www.thegilpin.co.uk/',
    'https://www.crimsonhotels.com/',
    'https://www.villa-lena.it/',
]);
