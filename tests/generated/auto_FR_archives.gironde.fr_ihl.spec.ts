import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.gironde.fr_ihl', ['https://archives.gironde.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
