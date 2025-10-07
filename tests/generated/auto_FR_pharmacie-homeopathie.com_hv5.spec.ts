import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharmacie-homeopathie.com_hv5', ['https://www.pharmacie-homeopathie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
