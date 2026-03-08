import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cren.univ-nantes.fr_uw2', ['https://cren.univ-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
