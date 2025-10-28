import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kingarthurbaking.com_m16', ['https://www.kingarthurbaking.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
