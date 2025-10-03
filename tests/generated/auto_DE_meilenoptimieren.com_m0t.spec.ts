import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meilenoptimieren.com_m0t', ['https://meilenoptimieren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
