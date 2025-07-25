import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-angers.fr_85f', ['https://www.univ-angers.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
