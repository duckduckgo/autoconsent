import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mesdepanneurs.fr_9sy', ['https://www.mesdepanneurs.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
