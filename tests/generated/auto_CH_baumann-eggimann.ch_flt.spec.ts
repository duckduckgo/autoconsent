import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baumann-eggimann.ch_flt', ['https://baumann-eggimann.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
