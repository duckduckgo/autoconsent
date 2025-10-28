import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chu-montpellier.fr_0w7', ['https://www.chu-montpellier.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
