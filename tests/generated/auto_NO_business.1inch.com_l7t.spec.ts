import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_business.1inch.com_l7t', ['https://business.1inch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
