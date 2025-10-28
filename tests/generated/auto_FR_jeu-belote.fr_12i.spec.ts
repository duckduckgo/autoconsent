import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeu-belote.fr_12i', ['https://www.jeu-belote.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
