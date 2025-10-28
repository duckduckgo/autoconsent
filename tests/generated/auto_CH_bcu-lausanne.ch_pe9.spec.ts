import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bcu-lausanne.ch_pe9', ['https://www.bcu-lausanne.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
