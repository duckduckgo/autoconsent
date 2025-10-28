import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gezondvandaag.com_nm6', ['https://gezondvandaag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
