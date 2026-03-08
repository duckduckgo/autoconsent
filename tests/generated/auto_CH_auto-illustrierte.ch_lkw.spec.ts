import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-illustrierte.ch_lkw', ['https://auto-illustrierte.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
