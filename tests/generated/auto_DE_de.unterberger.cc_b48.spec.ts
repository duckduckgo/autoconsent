import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.unterberger.cc_b48', ['https://de.unterberger.cc/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
