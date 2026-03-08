import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fraeulein-luise.ch_lsw', ['https://fraeulein-luise.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
