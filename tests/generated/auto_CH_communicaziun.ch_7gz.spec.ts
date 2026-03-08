import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_communicaziun.ch_7gz', ['https://communicaziun.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
