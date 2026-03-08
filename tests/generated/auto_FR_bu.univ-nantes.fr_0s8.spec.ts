import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bu.univ-nantes.fr_0s8', ['https://bu.univ-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
