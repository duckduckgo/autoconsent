import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharmacie-homeopathie.com_fkk', ['https://www.pharmacie-homeopathie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
