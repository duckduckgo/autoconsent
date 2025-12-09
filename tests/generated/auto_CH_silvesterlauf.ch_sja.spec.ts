import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_silvesterlauf.ch_sja', ['https://www.silvesterlauf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
