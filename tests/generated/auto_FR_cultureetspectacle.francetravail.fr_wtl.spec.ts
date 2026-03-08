import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cultureetspectacle.francetravail.fr_wtl', ['https://cultureetspectacle.francetravail.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
