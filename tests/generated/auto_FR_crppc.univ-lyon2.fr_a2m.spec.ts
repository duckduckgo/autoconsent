import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_crppc.univ-lyon2.fr_a2m', ['https://crppc.univ-lyon2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
