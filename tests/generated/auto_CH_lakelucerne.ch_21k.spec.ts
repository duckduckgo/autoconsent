import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lakelucerne.ch_21k', ['https://www.lakelucerne.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
