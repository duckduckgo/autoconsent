import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisstennis.ch_snd', ['https://www.swisstennis.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
