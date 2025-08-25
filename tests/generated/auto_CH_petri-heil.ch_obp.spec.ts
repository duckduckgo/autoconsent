import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_petri-heil.ch_obp', ['https://www.petri-heil.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
