import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanwalraven.com_52i', ['https://www.vanwalraven.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
