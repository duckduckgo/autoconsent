import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_daac.ac-creteil.fr_qmu', ['https://daac.ac-creteil.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
