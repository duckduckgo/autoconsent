import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_advancedmixology.com_3av', ['https://advancedmixology.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
