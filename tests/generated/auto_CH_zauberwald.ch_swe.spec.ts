import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zauberwald.ch_swe', ['https://www.zauberwald.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
