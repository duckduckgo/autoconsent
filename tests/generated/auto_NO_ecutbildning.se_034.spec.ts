import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ecutbildning.se_034', ['https://ecutbildning.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
