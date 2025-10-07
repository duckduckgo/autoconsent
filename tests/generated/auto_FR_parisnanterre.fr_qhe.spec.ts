import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parisnanterre.fr_qhe', ['https://www.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
