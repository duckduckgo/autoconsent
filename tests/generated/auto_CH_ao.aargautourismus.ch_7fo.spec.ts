import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ao.aargautourismus.ch_7fo', ['https://ao.aargautourismus.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
