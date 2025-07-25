import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-immobilier.credit-agricole.fr_1yi', ['https://e-immobilier.credit-agricole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
