import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_communityforums.atmeta.com_kez', ['https://communityforums.atmeta.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
