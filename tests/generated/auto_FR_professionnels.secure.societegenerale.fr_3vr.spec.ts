import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.secure.societegenerale.fr_3vr', ['https://professionnels.secure.societegenerale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
