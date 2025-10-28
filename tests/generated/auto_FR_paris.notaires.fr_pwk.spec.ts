import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_paris.notaires.fr_pwk', ['https://paris.notaires.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
