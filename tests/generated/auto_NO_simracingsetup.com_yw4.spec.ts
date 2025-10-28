import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_simracingsetup.com_yw4', ['https://simracingsetup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
