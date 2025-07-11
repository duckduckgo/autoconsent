import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_communityforums.atmeta.com_nzg', ['https://communityforums.atmeta.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
