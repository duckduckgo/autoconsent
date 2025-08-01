import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-nantes.fr_peq', ['https://www.univ-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
