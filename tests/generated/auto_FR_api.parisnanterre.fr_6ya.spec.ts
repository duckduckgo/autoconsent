import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_api.parisnanterre.fr_6ya', ['https://api.parisnanterre.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
