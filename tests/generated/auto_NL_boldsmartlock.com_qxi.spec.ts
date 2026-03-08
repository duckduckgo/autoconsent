import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_boldsmartlock.com_qxi', ['https://boldsmartlock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
