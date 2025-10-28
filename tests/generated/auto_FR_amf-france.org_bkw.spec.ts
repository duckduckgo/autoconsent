import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amf-france.org_bkw', ['https://www.amf-france.org/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
