import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arosaholiday.ch_2l1', ['https://www.arosaholiday.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
