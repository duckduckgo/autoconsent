import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dorothyperkins.com_gx1', ['https://www.dorothyperkins.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
