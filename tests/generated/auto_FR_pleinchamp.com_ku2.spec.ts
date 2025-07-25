import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pleinchamp.com_ku2', ['https://www.pleinchamp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
