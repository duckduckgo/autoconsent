import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ens-paris-saclay.fr_vz8', ['https://ens-paris-saclay.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
