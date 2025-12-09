import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schubiger.ch_7d9', ['https://www.schubiger.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
