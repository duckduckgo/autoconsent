import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hev-winterthur.ch_2p1', ['https://www.hev-winterthur.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
