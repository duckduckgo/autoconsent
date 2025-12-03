import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_probtp.com_rmi', ['https://www.probtp.com/particuliers-accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
