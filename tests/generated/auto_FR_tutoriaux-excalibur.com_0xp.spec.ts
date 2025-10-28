import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tutoriaux-excalibur.com_0xp', ['https://www.tutoriaux-excalibur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
