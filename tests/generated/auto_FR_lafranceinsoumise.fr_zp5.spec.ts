import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafranceinsoumise.fr_zp5', ['https://lafranceinsoumise.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
