import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_egsoftware.com_5hr', ['https://egsoftware.com/no'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
