import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cliniqueveterinairechampionnet.fr_wo5', ['https://cliniqueveterinairechampionnet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
