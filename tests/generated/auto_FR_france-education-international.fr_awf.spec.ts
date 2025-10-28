import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-education-international.fr_awf', ['https://www.france-education-international.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
