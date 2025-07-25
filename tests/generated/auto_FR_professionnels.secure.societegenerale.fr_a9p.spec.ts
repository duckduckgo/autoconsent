import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.secure.societegenerale.fr_a9p', ['https://professionnels.secure.societegenerale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
