import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_compas.uwartsonline.nl_562', ['https://compas.uwartsonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
