import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betreibungsschalter-plus.ch_ys3', ['https://www.betreibungsschalter-plus.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
