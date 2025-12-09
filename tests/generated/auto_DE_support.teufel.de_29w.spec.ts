import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_support.teufel.de_29w', ['https://support.teufel.de/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
