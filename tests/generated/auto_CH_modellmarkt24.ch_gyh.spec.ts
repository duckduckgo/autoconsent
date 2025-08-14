import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modellmarkt24.ch_gyh', ['https://www.modellmarkt24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
