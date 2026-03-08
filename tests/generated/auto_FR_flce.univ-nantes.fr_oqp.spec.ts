import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_flce.univ-nantes.fr_oqp', ['https://flce.univ-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
