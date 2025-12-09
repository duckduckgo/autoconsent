import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ferroflex.ch_kfj', ['https://www.ferroflex.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
