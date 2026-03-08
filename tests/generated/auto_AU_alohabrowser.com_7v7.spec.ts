import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_alohabrowser.com_7v7', ['https://alohabrowser.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
