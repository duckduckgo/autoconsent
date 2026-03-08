import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprises.secure.societegenerale.fr_i3f', ['https://entreprises.secure.societegenerale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
