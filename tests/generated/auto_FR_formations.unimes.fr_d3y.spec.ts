import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formations.unimes.fr_d3y', ['https://formations.unimes.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
