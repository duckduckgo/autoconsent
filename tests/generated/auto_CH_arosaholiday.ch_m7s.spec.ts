import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arosaholiday.ch_m7s', ['https://www.arosaholiday.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
