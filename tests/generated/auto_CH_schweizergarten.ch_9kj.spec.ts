import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweizergarten.ch_9kj', ['https://www.schweizergarten.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
