import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_support-leagueoflegends.riotgames.com_c3w', ['https://support-leagueoflegends.riotgames.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
