import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_commission.europa.eu_w37', ['https://commission.europa.eu/index_en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
