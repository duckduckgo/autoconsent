import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arosaholiday.ch_4nx', ['https://www.arosaholiday.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
