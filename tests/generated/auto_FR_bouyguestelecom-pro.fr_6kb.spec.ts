import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bouyguestelecom-pro.fr_6kb', ['https://www.bouyguestelecom-pro.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
