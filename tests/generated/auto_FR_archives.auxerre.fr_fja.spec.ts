import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.auxerre.fr_fja', ['https://archives.auxerre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
