import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_degussa-goldhandel.de_6ve', ['https://www.degussa-goldhandel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
