import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meilenoptimieren.com_h3s', ['https://meilenoptimieren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
