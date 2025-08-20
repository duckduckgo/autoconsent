import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_societegenerale.fr_5dd', ['https://particuliers.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
