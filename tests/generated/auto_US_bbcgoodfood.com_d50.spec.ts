import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bbcgoodfood.com_d50', ['https://www.bbcgoodfood.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
