import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamutuellegenerale.fr_5hi', ['https://www.lamutuellegenerale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
