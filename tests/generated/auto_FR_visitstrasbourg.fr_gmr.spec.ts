import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_visitstrasbourg.fr_gmr', ['https://www.visitstrasbourg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
