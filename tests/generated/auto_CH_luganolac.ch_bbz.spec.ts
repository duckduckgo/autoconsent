import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_luganolac.ch_bbz', ['https://www.luganolac.ch/lac/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
