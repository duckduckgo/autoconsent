import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assure.repamgestion.fr_ajx', ['https://assure.repamgestion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
