import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'efilli',
    [
        'https://webrazzi.com/',
        'https://www.turkcell.com.tr/',
        'https://www.koton.com/',
        'https://www.akbank.com/',
        'https://www.denizbank.com/',
    ],
    {},
);
