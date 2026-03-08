import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_efteling.ah.nl_9k4', ['https://efteling.ah.nl/efteling/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
