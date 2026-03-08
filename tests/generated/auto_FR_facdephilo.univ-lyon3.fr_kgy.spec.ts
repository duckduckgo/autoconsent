import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_facdephilo.univ-lyon3.fr_kgy', ['https://facdephilo.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
