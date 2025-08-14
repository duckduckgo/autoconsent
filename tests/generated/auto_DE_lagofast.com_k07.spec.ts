import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lagofast.com_k07', ['https://www.lagofast.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
