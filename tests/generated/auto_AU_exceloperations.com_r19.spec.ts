import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_exceloperations.com_r19', ['https://exceloperations.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
