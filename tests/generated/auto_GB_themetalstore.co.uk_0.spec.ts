import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_themetalstore.co.uk_0', ['https://www.themetalstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
