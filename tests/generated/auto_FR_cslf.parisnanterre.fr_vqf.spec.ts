import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cslf.parisnanterre.fr_vqf', ['https://cslf.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
