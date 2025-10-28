import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tractors-and-machinery.nl_u2j', ['https://www.tractors-and-machinery.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
