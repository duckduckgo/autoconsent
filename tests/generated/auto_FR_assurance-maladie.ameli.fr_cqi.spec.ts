import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assurance-maladie.ameli.fr_cqi', ['https://www.assurance-maladie.ameli.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
