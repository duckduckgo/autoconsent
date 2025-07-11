import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trading212.com_y5b', ['https://www.trading212.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
