import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_taxinsider.co.uk_0', ['https://www.taxinsider.co.uk/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
