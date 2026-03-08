import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.univ-tlse3.fr_h9p', ['https://bibliotheques.univ-tlse3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
