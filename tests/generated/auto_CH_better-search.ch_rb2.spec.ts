import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_better-search.ch_rb2', ['https://www.better-search.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
