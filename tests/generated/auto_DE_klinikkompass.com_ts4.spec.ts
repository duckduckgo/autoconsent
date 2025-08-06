import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikkompass.com_ts4', ['https://www.klinikkompass.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
