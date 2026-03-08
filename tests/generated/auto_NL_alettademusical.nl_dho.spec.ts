import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alettademusical.nl_dho', ['https://alettademusical.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
