import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.ube.fr_v1n', ['https://formations.ube.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
