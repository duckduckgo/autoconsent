import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliocollege.essonne.fr_n2m', ['https://bibliocollege.essonne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
