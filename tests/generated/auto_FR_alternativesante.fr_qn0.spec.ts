import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alternativesante.fr_qn0', ['https://www.alternativesante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
