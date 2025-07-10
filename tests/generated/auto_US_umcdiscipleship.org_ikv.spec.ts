import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_umcdiscipleship.org_ikv', ['https://www.umcdiscipleship.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
