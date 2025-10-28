import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_riotgames.com_j33', ['https://www.riotgames.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
