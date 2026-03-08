import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_facdeslangues.univ-lyon3.fr_b4o', ['https://facdeslangues.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
