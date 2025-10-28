import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_puzzelnl.khbarmix.com_gn5', ['https://puzzelnl.khbarmix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
