import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meilenoptimieren.com_vf8', ['https://meilenoptimieren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
