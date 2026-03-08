import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ancrehistoire.fr_mzy', ['https://ancrehistoire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
