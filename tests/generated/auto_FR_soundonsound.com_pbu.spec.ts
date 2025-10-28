import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_soundonsound.com_pbu', ['https://www.soundonsound.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
