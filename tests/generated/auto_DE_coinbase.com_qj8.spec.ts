import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coinbase.com_qj8', ['https://www.coinbase.com/en-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
