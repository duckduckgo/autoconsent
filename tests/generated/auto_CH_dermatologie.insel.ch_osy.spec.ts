import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dermatologie.insel.ch_osy', ['https://dermatologie.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
