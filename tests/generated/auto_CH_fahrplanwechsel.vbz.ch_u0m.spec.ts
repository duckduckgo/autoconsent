import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fahrplanwechsel.vbz.ch_u0m', ['https://fahrplanwechsel.vbz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
