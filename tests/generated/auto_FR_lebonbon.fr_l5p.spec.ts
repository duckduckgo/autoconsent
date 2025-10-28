import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lebonbon.fr_l5p', ['https://www.lebonbon.fr/paris/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
