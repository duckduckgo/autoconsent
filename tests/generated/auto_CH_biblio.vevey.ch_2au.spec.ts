import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biblio.vevey.ch_2au', ['https://biblio.vevey.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
