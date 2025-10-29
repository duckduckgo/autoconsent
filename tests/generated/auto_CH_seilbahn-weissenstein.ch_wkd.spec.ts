import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seilbahn-weissenstein.ch_wkd', ['https://www.seilbahn-weissenstein.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
