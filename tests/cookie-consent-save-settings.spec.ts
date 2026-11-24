import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-consent-save-settings',
    ['https://www.rosepartner.de/', 'https://www.stattreisen-hamburg.de/', 'https://ventuslx.de/'],
    {},
);
