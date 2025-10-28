import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grenoblealpesmetropole.fr_nh9', ['https://www.grenoblealpesmetropole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
