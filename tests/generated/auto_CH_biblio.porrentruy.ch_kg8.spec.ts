import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biblio.porrentruy.ch_kg8', ['https://biblio.porrentruy.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
