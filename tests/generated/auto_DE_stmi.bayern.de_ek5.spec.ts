import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stmi.bayern.de_ek5', ['https://www.stmi.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
