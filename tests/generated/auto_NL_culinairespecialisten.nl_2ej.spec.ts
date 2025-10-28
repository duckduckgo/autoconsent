import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_culinairespecialisten.nl_2ej', ['https://www.culinairespecialisten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
