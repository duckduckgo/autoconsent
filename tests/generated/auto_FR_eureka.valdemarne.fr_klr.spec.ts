import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eureka.valdemarne.fr_klr', ['https://eureka.valdemarne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
