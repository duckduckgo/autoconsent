import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_support-leagueoflegends.riotgames.com_uty', ['https://support-leagueoflegends.riotgames.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
