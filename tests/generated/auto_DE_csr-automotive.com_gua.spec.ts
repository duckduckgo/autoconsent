import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_csr-automotive.com_gua', ['https://csr-automotive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
