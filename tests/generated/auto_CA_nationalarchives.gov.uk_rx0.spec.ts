import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_nationalarchives.gov.uk_rx0',
    ['https://webarchive.nationalarchives.gov.uk/ukgwa/20250613000000/https://blog.nationalarchives.gov.uk/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
