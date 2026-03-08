import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diaper.community_q77', ['https://diaper.community/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
