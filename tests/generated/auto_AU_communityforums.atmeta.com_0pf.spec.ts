import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_communityforums.atmeta.com_0pf', ['https://communityforums.atmeta.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
