import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brownhealth.org_hbh', ['https://www.brownhealth.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
