import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pharmacyregulation.org_3b6', ['https://www.pharmacyregulation.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
