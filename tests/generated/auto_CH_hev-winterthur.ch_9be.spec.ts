import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hev-winterthur.ch_9be', ['https://www.hev-winterthur.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
