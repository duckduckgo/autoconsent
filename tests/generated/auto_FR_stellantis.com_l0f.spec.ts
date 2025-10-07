import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_l0f', ['https://www.stellantis.com/en?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
