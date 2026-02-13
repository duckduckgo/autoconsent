import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.bestreviews.guide_qei', ['https://uk.bestreviews.guide/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
