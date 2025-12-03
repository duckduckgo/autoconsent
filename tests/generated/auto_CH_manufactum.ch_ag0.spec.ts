import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manufactum.ch_ag0', ['https://www.manufactum.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
