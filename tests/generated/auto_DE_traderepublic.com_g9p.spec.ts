import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_traderepublic.com_g9p', ['https://traderepublic.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
