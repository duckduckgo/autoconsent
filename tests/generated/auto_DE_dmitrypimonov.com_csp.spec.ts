import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dmitrypimonov.com_csp', ['https://dmitrypimonov.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
