import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schweiztipps.ch_k9g', ['https://www.schweiztipps.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
