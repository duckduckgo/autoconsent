import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ulocation.com_tey', ['https://www.ulocation.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
