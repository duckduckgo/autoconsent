import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fraulocke-grundschultante.de_hvx', ['https://fraulocke-grundschultante.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
