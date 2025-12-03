import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stockopedia.com_0', ['https://www.stockopedia.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
