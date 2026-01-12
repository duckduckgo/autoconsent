import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theaterdeveste.nl_mpi', ['https://www.theaterdeveste.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
