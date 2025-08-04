import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shropshirelive.com_gm9', ['https://www.shropshirelive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
