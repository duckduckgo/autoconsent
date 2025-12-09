import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_latoquedor.com_6l9', ['https://www.latoquedor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
