import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fournisseurs-electricite.com_cuc', ['https://www.fournisseurs-electricite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
