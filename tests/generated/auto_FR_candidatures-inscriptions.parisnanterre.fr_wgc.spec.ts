import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_candidatures-inscriptions.parisnanterre.fr_wgc', ['https://candidatures-inscriptions.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
