import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ukrainiancharm.com_ygb', ['https://ukrainiancharm.com/signup/1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
