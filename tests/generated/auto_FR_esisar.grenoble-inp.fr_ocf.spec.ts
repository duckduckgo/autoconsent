import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_esisar.grenoble-inp.fr_ocf', ['https://esisar.grenoble-inp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
