import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseau.citroen.fr_bmw', ['https://reseau.citroen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
