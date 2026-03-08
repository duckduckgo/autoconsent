import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agences.fiducial.fr_f33', ['https://agences.fiducial.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
