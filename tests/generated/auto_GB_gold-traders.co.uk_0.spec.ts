import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gold-traders.co.uk_0', ['https://www.gold-traders.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
