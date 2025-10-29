import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_books.core-econ.org_165', ['https://books.core-econ.org/the-economy/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
