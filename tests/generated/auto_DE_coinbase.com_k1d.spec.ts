import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coinbase.com_k1d', ['https://www.coinbase.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
