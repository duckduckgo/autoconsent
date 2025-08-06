import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kskmse.de_slb', ['https://www.kskmse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
