import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_apps.microsoft.com_c0q', ['https://apps.microsoft.com/?hl=en-US&gl=CA'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
