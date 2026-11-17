import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-bar-frame',
    ['https://www.test.se/', 'https://www.outdoor.se/', 'https://www.handlasmart.se/', 'https://www.sistaminutenresor.com/'],
    {},
);
