import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igeeksblog.com_pa3', ['https://www.igeeksblog.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
