import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations-dev.parisnanterre.fr_0kc', ['https://formations-dev.parisnanterre.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
