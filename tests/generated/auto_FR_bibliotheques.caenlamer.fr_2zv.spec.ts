import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.caenlamer.fr_2zv', ['https://bibliotheques.caenlamer.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
