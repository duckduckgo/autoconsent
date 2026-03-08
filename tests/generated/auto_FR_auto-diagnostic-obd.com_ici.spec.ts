import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auto-diagnostic-obd.com_ici', ['https://auto-diagnostic-obd.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
