import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_billetterie.comedie.ch_2dx', ['https://billetterie.comedie.ch/content'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
