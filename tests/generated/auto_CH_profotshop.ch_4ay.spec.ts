import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_profotshop.ch_4ay', ['https://www.profotshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
