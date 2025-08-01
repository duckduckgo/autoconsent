import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hansgrohe.ch_qt5', ['https://www.hansgrohe.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
