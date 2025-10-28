import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_3mdeutschland.de_0bt',
    ['https://www.3mdeutschland.de/3M/de_DE/unternehmen-de/?utm_medium=redirect&utm_source=vanity-url&utm_campaign=www.3mdeutschland.de'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
