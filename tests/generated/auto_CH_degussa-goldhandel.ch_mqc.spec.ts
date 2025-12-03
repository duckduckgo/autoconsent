import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_degussa-goldhandel.ch_mqc', ['https://www.degussa-goldhandel.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
