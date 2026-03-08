import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dysco.parisnanterre.fr_aa6', ['https://dysco.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
