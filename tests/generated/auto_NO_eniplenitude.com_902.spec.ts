import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eniplenitude.com_902', ['https://eniplenitude.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
