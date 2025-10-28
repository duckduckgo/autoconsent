import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.checkmk.com_ug3', ['https://docs.checkmk.com/latest/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
