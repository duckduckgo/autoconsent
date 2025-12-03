import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parisnanterre.fr_0qr', ['https://www.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
