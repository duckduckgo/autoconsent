import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carrieres.generali.fr_pny', ['https://carrieres.generali.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
