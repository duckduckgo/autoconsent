import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissolympic.ch_36x', ['https://www.swissolympic.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
