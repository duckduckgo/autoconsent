import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweizergarten.ch_3tx', ['https://www.schweizergarten.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
