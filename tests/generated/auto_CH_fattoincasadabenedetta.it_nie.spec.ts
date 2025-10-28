import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fattoincasadabenedetta.it_nie', ['https://www.fattoincasadabenedetta.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
