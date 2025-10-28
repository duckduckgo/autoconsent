import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nhp-motoculture.fr_k4t', ['https://www.nhp-motoculture.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
