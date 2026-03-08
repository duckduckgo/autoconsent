import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.bordeaux-metropole.fr_t3h', ['https://archives.bordeaux-metropole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
