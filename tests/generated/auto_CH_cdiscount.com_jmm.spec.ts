import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cdiscount.com_jmm', ['https://www.cdiscount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
