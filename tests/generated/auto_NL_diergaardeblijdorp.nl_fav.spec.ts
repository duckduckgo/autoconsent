import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_diergaardeblijdorp.nl_fav', ['https://diergaardeblijdorp.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
