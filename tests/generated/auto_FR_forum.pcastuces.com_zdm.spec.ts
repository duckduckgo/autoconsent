import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.pcastuces.com_zdm', ['https://forum.pcastuces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
