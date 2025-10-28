import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eservices.nantesmetropole.fr_uo0', ['https://eservices.nantesmetropole.fr/accueil-particuliers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
