import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheque.nantes.fr_ybb', ['https://bibliotheque.nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
