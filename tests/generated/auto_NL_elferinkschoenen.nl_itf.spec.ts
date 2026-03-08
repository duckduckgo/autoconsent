import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elferinkschoenen.nl_itf', ['https://elferinkschoenen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
