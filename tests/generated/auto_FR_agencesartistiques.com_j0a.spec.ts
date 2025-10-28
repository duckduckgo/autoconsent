import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agencesartistiques.com_j0a', ['https://www.agencesartistiques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
