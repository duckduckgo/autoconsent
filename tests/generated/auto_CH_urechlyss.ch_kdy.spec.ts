import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_urechlyss.ch_kdy', ['https://www.urechlyss.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
