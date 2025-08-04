import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arosaholiday.ch_a8w', ['https://www.arosaholiday.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
