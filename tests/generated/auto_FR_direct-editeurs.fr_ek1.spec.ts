import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_direct-editeurs.fr_ek1', ['https://direct-editeurs.fr/nos-magazines'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
