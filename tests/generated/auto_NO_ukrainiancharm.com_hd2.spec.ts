import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ukrainiancharm.com_hd2', ['https://ukrainiancharm.com/signup/1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
