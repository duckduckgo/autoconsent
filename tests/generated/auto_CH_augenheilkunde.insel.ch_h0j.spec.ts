import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augenheilkunde.insel.ch_h0j', ['https://augenheilkunde.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
