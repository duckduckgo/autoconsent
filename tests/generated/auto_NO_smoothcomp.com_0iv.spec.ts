import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_smoothcomp.com_0iv', ['https://smoothcomp.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
