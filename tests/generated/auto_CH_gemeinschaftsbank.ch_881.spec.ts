import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gemeinschaftsbank.ch_881', ['https://gemeinschaftsbank.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
