import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francecasse.fr_ur7', ['https://www.francecasse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
