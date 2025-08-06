import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trading212.com_0hx', ['https://www.trading212.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
