import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.clearblue.com_vdo', ['https://fr.clearblue.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
