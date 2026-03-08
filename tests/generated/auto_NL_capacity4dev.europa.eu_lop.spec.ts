import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_capacity4dev.europa.eu_lop', ['https://capacity4dev.europa.eu/_en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
