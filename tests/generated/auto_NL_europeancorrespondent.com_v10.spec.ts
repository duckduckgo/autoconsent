import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_europeancorrespondent.com_v10', ['https://europeancorrespondent.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
