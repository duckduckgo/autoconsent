import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_energiegossau.ch_q53', ['https://energiegossau.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
