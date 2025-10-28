import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skyscanner.net_j0c', ['https://www.skyscanner.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
