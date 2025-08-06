import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_we-online.com_vp3', ['https://www.we-online.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
