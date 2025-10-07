import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweizergarten.ch_zil', ['https://www.schweizergarten.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
