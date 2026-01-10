import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.parisnanterre.fr_ub1', ['https://formations.parisnanterre.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
