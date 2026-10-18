import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'askas',
    [
        'https://penstore.se/',
        'https://impecta.se/',
        'https://askas.se/',
        'https://maxgaming.se/',
        'https://kitchenlab.se/',
        'https://bengans.se/',
    ],
    {},
);
