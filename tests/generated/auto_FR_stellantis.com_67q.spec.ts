import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_67q', ['https://www.stellantis.com/en?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
