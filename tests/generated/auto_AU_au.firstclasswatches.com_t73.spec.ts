import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.firstclasswatches.com_t73', ['https://au.firstclasswatches.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
