import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharmacie-homeopathie.com_z34', ['https://www.pharmacie-homeopathie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
