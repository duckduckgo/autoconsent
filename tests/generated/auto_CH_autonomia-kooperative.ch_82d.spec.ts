import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autonomia-kooperative.ch_82d', ['https://autonomia-kooperative.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
