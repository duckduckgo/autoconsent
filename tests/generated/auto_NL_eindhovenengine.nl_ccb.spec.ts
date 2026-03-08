import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eindhovenengine.nl_ccb', ['https://eindhovenengine.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
