import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aegon.nl_y2y', ['https://www.aegon.nl/particulier/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
