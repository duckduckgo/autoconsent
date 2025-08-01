import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_communityforums.atmeta.com_381', ['https://communityforums.atmeta.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
