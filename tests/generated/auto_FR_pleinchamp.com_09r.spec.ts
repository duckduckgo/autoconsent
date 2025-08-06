import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pleinchamp.com_09r', ['https://www.pleinchamp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
