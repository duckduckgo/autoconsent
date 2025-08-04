import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thermalbad-wallis.ch_3zs', ['https://thermalbad-wallis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
