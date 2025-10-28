import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpesvaudoises.ch_zam', ['https://www.alpesvaudoises.ch/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
