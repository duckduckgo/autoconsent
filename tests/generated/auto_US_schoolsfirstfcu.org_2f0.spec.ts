import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_schoolsfirstfcu.org_2f0', ['https://www.schoolsfirstfcu.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
