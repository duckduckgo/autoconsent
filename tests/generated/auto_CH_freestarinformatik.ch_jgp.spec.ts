import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freestarinformatik.ch_jgp', ['https://www.freestarinformatik.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
