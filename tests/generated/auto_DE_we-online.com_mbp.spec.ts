import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_we-online.com_mbp', ['https://www.we-online.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
