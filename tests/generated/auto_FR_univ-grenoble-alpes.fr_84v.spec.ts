import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-grenoble-alpes.fr_84v', ['https://www.univ-grenoble-alpes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
