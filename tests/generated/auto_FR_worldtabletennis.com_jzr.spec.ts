import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_worldtabletennis.com_jzr', ['https://www.worldtabletennis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
