import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.sg.fr_atf', ['https://professionnels.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
