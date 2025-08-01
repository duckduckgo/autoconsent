import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_particuliers.sg.fr_257', ['https://particuliers.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
