import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_decantalo.ch_o4s', ['https://www.decantalo.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
