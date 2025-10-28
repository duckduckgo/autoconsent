import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_10fastfingers.com_ige', ['https://10fastfingers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
