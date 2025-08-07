import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shropshirelive.com_rj2', ['https://www.shropshirelive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
