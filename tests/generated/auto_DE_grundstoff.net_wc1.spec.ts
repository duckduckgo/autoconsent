import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_grundstoff.net_wc1', ['https://www.grundstoff.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
