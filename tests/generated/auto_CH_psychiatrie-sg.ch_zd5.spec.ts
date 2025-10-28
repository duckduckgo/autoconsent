import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_psychiatrie-sg.ch_zd5', ['https://www.psychiatrie-sg.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
