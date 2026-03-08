import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.loire-atlantique.fr_lea', ['https://archives.loire-atlantique.fr/44/accueil-archives/j_6'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
