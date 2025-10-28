import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_umcdiscipleship.org_v3u', ['https://www.umcdiscipleship.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
