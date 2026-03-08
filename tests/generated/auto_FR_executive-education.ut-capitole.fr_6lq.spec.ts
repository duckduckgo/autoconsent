import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_executive-education.ut-capitole.fr_6lq', ['https://executive-education.ut-capitole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
