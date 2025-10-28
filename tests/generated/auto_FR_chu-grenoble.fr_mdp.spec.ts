import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chu-grenoble.fr_mdp', ['https://www.chu-grenoble.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
