import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pccomponentes.fr_w5w', ['https://www.pccomponentes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
