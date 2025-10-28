import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mobypark.com_zcw', ['https://www.mobypark.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
