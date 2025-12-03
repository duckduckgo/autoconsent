import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lzo.com_dbu', ['https://www.lzo.com/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
