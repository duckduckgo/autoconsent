import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trading212.com_p98', ['https://www.trading212.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
