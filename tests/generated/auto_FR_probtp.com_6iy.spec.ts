import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_probtp.com_6iy', ['https://www.probtp.com/particuliers-accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
