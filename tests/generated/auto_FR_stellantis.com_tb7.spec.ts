import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_tb7', ['https://www.stellantis.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
