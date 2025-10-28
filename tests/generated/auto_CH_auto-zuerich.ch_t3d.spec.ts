import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-zuerich.ch_t3d', ['https://www.auto-zuerich.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
