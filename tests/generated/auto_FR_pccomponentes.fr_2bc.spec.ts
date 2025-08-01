import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pccomponentes.fr_2bc', ['https://www.pccomponentes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
