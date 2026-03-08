import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.aubervilliers.fr_i4u', ['https://archives.aubervilliers.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
