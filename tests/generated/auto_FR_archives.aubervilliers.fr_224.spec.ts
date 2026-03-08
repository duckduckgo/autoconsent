import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.aubervilliers.fr_224', ['https://archives.aubervilliers.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
