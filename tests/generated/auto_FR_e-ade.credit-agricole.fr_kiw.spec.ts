import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-ade.credit-agricole.fr_kiw', ['https://e-ade.credit-agricole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
