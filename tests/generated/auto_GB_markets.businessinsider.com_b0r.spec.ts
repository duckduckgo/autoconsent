import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_markets.businessinsider.com_b0r', ['https://markets.businessinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
