import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_probtp.com_d8n', ['https://www.probtp.com/particuliers-accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
