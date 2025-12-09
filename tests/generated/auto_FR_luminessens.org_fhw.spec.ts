import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_luminessens.org_fhw', ['https://www.luminessens.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
