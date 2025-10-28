import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bergmanclinics.nl_2cs', ['https://www.bergmanclinics.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
