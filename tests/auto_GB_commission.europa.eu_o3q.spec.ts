import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_commission.europa.eu_o3q', ['https://commission.europa.eu/index_en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
