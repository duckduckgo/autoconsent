import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.amiens.fr_zg4', ['https://bibliotheques.amiens.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
