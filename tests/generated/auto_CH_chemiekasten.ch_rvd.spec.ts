import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chemiekasten.ch_rvd', ['https://chemiekasten.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
