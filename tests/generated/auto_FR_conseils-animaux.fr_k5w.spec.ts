import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_conseils-animaux.fr_k5w', ['https://conseils-animaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
