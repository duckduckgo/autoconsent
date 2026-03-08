import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-medias.biblio7374.fr_apt', ['https://e-medias.biblio7374.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
