import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_books.core-econ.org_xui', ['https://books.core-econ.org/the-economy/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
