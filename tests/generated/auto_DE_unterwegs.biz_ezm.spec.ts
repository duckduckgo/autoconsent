import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unterwegs.biz_ezm', ['https://www.unterwegs.biz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
