import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bouyguestelecom.fr_g6z', ['https://www.bouyguestelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
