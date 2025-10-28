import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schubiger.ch_ddy', ['https://www.schubiger.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
