import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_expressions-francaises.fr_2fl', ['https://www.expressions-francaises.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
