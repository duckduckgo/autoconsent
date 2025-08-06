import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maaf.fr_ua8', ['https://www.maaf.fr/fr/assurance'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
