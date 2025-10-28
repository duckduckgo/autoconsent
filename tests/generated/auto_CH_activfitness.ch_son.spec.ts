import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_activfitness.ch_son', ['https://www.activfitness.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
