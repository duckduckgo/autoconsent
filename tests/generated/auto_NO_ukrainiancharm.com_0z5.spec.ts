import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ukrainiancharm.com_0z5', ['https://ukrainiancharm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
