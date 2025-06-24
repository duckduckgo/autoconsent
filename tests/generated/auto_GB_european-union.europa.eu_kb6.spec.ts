import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_european-union.europa.eu_kb6', ['https://european-union.europa.eu/index_en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
