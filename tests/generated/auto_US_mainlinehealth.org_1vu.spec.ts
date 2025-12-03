import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mainlinehealth.org_1vu', ['https://www.mainlinehealth.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
