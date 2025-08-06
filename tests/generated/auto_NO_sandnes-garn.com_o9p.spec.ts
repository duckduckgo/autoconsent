import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sandnes-garn.com_o9p', ['https://www.sandnes-garn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
