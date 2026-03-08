import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amstein-walthert.ch_za9', ['https://amstein-walthert.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
