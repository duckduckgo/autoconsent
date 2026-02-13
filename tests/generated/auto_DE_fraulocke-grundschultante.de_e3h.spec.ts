import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fraulocke-grundschultante.de_e3h', ['https://fraulocke-grundschultante.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
