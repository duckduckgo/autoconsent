import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_riotgames.com_nb4', ['https://www.riotgames.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
