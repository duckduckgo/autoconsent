import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-adherent.gpm.fr_ijd', ['https://espace-adherent.gpm.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
