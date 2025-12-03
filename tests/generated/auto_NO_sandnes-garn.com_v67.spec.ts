import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sandnes-garn.com_v67', ['https://www.sandnes-garn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
