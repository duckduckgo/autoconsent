import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives-deux-sevres-vienne.fr_0wx', ['https://archives-deux-sevres-vienne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
