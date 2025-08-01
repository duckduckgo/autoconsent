import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pixartprinting.fr_q2o', ['https://www.pixartprinting.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
