import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_craghoppers.com_0yl', ['https://www.craghoppers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
