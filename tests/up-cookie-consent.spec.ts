import generateCMPTests from '../playwright/runner';

generateCMPTests('up-cookie-consent', [
    'https://marrableshotel.com/',
    'https://crimsonhotels.com/',
    'https://www.thegrove.co.uk/',
    'https://www.thegilpin.co.uk/',
    'https://www.thehari.com/',
]);
