import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blabbermouth.net_kst', ['https://blabbermouth.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
