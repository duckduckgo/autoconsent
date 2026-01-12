import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_etsglobal.org_vv5', ['https://www.etsglobal.org/fr/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
