import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lakelucerne.ch_1e8', ['https://www.lakelucerne.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
