import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sonicdrivein.com_y6w', ['https://www.sonicdrivein.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
