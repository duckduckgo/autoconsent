import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cartridgeworld.co.uk_0', ['https://www.cartridgeworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
