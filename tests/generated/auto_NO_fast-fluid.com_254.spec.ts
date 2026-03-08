import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fast-fluid.com_254', ['https://fast-fluid.com/emea/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
