import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-patient.medipath.fr_2ea', ['https://espace-patient.medipath.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
