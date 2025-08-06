import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.sg.fr_3e0', ['https://professionnels.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
