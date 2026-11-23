import generateCMPTests from '../playwright/runner';

generateCMPTests('betsson-fr', ['https://betsson.fr/fr'], {
    testSelfTest: false,
    onlyRegions: ['FR'],
});

generateCMPTests('betsson-fr', ['https://betsson.fr/fr'], {
    testSelfTest: false,
    onlyRegions: ['FR'],
    mobile: true,
});
