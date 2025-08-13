import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikkompass.com_e57', ['https://www.klinikkompass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
