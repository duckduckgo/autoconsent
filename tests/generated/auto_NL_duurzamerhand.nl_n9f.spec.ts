import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duurzamerhand.nl_n9f', ['https://www.duurzamerhand.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
