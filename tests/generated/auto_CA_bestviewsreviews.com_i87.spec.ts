import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bestviewsreviews.com_i87', ['https://bestviewsreviews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
