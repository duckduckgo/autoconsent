import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dep-psycho.parisnanterre.fr_who', ['https://dep-psycho.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
