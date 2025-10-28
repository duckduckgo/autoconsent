import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeu-tarot-en-ligne.com_rh3', ['https://www.jeu-tarot-en-ligne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
