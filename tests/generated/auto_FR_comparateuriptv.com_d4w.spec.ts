import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comparateuriptv.com_d4w', ['https://comparateuriptv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
