import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamutuellegenerale.fr_f99', ['https://www.lamutuellegenerale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
