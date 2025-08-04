import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_traderepublic.com_t53', ['https://traderepublic.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
