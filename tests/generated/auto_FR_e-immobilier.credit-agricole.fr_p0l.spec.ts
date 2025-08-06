import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-immobilier.credit-agricole.fr_p0l', ['https://e-immobilier.credit-agricole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
