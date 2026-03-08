import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dermato-info.fr_kfh', ['https://dermato-info.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
