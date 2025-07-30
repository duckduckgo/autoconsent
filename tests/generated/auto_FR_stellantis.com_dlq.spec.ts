import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stellantis.com_dlq', ['https://www.stellantis.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
