import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_elderaffairs.org_1tb', ['https://elderaffairs.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
