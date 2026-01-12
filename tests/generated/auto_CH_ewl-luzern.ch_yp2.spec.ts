import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ewl-luzern.ch_yp2', ['https://www.ewl-luzern.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
