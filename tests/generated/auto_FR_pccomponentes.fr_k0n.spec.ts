import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pccomponentes.fr_k0n', ['https://www.pccomponentes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
