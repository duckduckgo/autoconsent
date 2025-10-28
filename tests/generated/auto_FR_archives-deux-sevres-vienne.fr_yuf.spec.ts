import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives-deux-sevres-vienne.fr_yuf', ['https://archives-deux-sevres-vienne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
