import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_3m.co.uk_og7',
    ['https://www.3m.co.uk/3M/en_GB/company-uk/?utm_medium=redirect&utm_source=vanity-url&utm_campaign=www.3m.co.uk'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
