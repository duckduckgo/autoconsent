import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_companydata.dk_nln', ['https://companydata.dk/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
