import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives36.fr_yj2', ['https://www.archives36.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
