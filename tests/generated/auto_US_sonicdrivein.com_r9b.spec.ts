import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sonicdrivein.com_r9b', ['https://www.sonicdrivein.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
