import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissolar.ch_gzb', ['https://www.swissolar.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
