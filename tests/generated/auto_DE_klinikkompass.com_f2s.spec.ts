import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikkompass.com_f2s', ['https://www.klinikkompass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
