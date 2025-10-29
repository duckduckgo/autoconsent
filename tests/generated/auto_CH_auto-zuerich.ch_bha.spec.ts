import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-zuerich.ch_bha', ['https://www.auto-zuerich.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
