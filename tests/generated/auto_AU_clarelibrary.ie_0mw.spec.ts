import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clarelibrary.ie_0mw', ['https://clarelibraries.ie/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
