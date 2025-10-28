import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_remi-centrevaldeloire.fr_m4v', ['https://www.remi-centrevaldeloire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
