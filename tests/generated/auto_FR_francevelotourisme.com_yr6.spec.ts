import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francevelotourisme.com_yr6', ['https://www.francevelotourisme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
