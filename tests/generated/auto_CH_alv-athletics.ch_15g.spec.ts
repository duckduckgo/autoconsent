import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alv-athletics.ch_15g', ['https://alv-athletics.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
