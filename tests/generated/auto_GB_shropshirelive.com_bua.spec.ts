import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shropshirelive.com_bua', ['https://www.shropshirelive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
