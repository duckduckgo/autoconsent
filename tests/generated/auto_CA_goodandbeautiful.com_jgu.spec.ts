import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_goodandbeautiful.com_jgu', ['https://www.goodandbeautiful.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
