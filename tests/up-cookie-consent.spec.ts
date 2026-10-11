import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'up-cookie-consent',
    [
        // "Reject All" in the notice
        'https://www.thegrove.co.uk/',
        'https://www.thegilpin.co.uk/',
        // "Reject All" in the preferences modal only
        'https://www.crimsonhotels.com/',
        'https://www.thehari.com/',
        'https://www.villa-lena.it/',
    ],
    {},
);
