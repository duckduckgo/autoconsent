import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-notice-checkboxes',
    [
        'https://www.uni-regensburg.de/',
        'https://www.kulturstiftung-des-bundes.de/',
        'https://www.captrain.de/',
        'https://www.uni-kassel.de/',
        'https://museen-in-bayern.de/',
    ],
    {},
);
