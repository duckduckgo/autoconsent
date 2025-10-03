import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweiztipps.ch_r3x', ['https://www.schweiztipps.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
