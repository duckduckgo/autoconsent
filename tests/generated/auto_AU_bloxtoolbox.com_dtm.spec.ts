import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bloxtoolbox.com_dtm', ['https://bloxtoolbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
