import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coinbase.com_0', ['https://www.coinbase.com/en-gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
