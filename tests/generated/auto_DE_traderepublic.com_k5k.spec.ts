import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_traderepublic.com_k5k', ['https://traderepublic.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
