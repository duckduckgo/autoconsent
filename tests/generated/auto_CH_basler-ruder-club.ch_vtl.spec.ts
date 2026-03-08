import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_basler-ruder-club.ch_vtl', ['https://basler-ruder-club.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
