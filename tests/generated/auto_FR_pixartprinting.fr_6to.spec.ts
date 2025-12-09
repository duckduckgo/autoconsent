import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pixartprinting.fr_6to', ['https://www.pixartprinting.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
