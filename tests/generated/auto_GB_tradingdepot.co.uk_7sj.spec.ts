import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tradingdepot.co.uk_7sj', ['https://www.tradingdepot.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
