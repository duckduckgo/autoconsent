import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cdiscount.com_326', ['https://www.cdiscount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
