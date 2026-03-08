import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_boek-offermans.nl_ryi', ['https://boek-offermans.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
