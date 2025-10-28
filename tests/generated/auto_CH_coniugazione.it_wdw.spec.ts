import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coniugazione.it_wdw', ['https://www.coniugazione.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
