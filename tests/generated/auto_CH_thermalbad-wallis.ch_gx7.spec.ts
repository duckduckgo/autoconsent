import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thermalbad-wallis.ch_gx7', ['https://thermalbad-wallis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
