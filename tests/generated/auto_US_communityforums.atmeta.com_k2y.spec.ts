import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_communityforums.atmeta.com_k2y', ['https://communityforums.atmeta.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
