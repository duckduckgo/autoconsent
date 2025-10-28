import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecoledulouvre.fr_440', ['https://www.ecoledulouvre.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
