import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bb-wertmetall.ch_t9o', ['https://www.bb-wertmetall.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
