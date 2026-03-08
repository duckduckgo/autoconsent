import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anaesthesiologie.insel.ch_zoz', ['https://anaesthesiologie.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
