import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_traderepublic.com_xbh', ['https://traderepublic.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
