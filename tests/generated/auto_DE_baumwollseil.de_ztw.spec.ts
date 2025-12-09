import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baumwollseil.de_ztw', ['https://www.baumwollseil.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
