import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monlyceenumerique.fr_ikg', ['https://monlyceenumerique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
