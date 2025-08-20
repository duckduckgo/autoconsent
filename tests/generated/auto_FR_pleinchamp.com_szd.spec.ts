import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pleinchamp.com_szd', ['https://www.pleinchamp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
