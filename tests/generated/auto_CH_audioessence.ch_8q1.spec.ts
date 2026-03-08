import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_audioessence.ch_8q1', ['https://audioessence.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
