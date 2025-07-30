import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thermalbad-wallis.ch_fsk', ['https://thermalbad-wallis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
