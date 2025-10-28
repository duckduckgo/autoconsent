import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_leagueoflegends.com_4it', ['https://www.leagueoflegends.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
