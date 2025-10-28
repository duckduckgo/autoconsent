import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maisonavendreetalouer.fr_loa', ['https://maisonavendreetalouer.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
