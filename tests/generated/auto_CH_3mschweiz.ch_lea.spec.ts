import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_3mschweiz.ch_lea',
    ['https://www.3mschweiz.ch/3M/de_CH/unternehmen-alpine/?utm_medium=redirect&utm_source=vanity-url&utm_campaign=www.3mschweiz.ch'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
