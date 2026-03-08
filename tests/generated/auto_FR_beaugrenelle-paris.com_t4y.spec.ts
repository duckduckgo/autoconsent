import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_beaugrenelle-paris.com_t4y', ['https://beaugrenelle-paris.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
