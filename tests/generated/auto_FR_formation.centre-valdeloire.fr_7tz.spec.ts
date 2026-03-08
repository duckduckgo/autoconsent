import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formation.centre-valdeloire.fr_7tz', ['https://formation.centre-valdeloire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
