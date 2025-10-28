import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aesio-sante.fr_ln8', ['https://www.aesio-sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
