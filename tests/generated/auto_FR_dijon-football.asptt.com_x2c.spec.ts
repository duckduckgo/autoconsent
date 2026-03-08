import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dijon-football.asptt.com_x2c', ['https://dijon-football.asptt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
