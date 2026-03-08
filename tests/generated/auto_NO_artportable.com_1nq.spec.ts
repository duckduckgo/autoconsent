import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_artportable.com_1nq', ['https://artportable.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
