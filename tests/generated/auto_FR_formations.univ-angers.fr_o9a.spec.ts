import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.univ-angers.fr_o9a', ['https://formations.univ-angers.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
