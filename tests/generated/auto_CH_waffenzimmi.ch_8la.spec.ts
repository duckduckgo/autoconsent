import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_waffenzimmi.ch_8la', ['https://www.waffenzimmi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
