import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_manuels.solutions_fv8', ['https://www.manuels.solutions/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
