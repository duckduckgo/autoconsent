import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bestreviews.guide_5qu', ['https://www.bestreviews.guide/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
