import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_baseball-reference.com_xzr', ['https://www.baseball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
