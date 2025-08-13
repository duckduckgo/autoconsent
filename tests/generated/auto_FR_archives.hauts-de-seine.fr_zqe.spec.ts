import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.hauts-de-seine.fr_zqe', ['https://archives.hauts-de-seine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
