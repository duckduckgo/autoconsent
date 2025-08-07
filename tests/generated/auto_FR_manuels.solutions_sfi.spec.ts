import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_manuels.solutions_sfi', ['https://www.manuels.solutions/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
