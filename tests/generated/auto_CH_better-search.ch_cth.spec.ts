import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_better-search.ch_cth', ['https://www.better-search.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
