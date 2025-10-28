import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_na.finalfantasyxiv.com_wyi', ['https://na.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
