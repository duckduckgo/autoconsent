import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freestarinformatik.ch_gco', ['https://www.freestarinformatik.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
