import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shropshirelive.com_h8g', ['https://www.shropshirelive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
