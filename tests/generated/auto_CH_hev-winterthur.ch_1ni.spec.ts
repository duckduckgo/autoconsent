import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hev-winterthur.ch_1ni', ['https://www.hev-winterthur.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
