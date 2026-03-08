import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archiviofotografico.museoegizio.it_zo4', ['https://archiviofotografico.museoegizio.it/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
