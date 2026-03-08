import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bluespassions.com_zjf', ['https://bluespassions.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
