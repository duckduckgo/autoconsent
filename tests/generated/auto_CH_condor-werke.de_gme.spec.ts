import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_condor-werke.de_gme', ['https://condor-werke.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
