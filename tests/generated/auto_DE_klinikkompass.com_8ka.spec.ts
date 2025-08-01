import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikkompass.com_8ka', ['https://www.klinikkompass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
