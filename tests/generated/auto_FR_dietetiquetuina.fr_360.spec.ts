import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dietetiquetuina.fr_360', ['https://dietetiquetuina.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
