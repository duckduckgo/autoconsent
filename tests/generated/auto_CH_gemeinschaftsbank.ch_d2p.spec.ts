import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gemeinschaftsbank.ch_d2p', ['https://gemeinschaftsbank.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
