import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_luminessens.org_ppi', ['https://www.luminessens.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
