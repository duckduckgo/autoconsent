import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fournisseurs-electricite.com_0o7', ['https://www.fournisseurs-electricite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
