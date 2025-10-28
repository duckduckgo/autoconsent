import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kernschaufelberger.ch_bw3', ['https://www.kernschaufelberger.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
