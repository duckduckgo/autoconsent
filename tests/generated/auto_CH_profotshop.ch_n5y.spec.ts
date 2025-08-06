import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_profotshop.ch_n5y', ['https://www.profotshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
