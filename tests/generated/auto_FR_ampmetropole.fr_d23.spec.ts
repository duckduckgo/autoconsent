import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ampmetropole.fr_d23', ['https://ampmetropole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
