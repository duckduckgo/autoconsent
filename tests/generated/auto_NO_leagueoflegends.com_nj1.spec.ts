import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_leagueoflegends.com_nj1', ['https://www.leagueoflegends.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
