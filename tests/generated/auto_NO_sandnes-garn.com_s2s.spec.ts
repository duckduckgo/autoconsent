import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sandnes-garn.com_s2s', ['https://www.sandnes-garn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
