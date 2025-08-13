import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gear4music.fr_me3', ['https://www.gear4music.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
