import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wordonfire.org_hh4', ['https://www.wordonfire.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
