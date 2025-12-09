import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_saseurobonusshop.com_ib1', ['https://www.saseurobonusshop.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
