import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_yvk', ['https://www.stellantis.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
