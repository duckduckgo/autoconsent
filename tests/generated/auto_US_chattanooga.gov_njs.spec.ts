import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_chattanooga.gov_njs', ['https://chattanooga.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
