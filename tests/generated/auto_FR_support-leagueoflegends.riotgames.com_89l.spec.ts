import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_support-leagueoflegends.riotgames.com_89l', ['https://support-leagueoflegends.riotgames.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
