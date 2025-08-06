import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_terra-aventura.fr_q6p', ['https://www.terra-aventura.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
